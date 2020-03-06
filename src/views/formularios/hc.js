import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    connect
} from "@brunomon/helpers"
import {
    store
} from "../../redux/store";

import {
    card
} from "../css/card"
import {
    boton
} from "../css/boton"
import {
    select
} from "../css/select"

import {
    input
} from "../css/input"

import {
    LEFT,
    ACEPTAR,
    NARANJA
} from "../../../assets/icons/icons";
import {
    add as addHC,
    update as updateHC

} from "../../redux/actions/hc"

import {
    nanoInput
} from "@brunomon/nano-input"

const HC_SELECCIONADA = "hc.selectedTimeStamp"
const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class appHC extends connect(store, HC_SELECCIONADA, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.item = {}
        this.idMascota = 0

    }

    static get styles() {
        return css `
       
        ${card}
        ${boton}
        ${select}
       
        :host{
            
            display:grid;
            background-color:white;
            grid-template-rows:auto auto auto 1fr auto;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])) #status{
            display:none
        }
       
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:white;
            grid-gap:0;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }

        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
        }
       
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
        }
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        #botonera{
            display:grid;
            
        }
       
        nano-input ,select{
            color:black;
            background-color:white;
            border-radius:0
        }

        `
    }
    render() {
        return html `
         <div id="status" style="font-weight:bold"> 
                <div>${NARANJA}</div>
                <div class="" @click="${this.cerrar}" id="cerrar">${LEFT}</div>
            </div>       
            <div id="titulo">
                <div>Estudio</div>
            </div>

            <div id ="cuerpo">
               
                <nano-input style="width:15rem" id="descripcion" type="text" label="Nombre del Estudio" .value="${this.item.descripcion}"></nano-input>
                <nano-input style="width:15rem" id="fecha" type="date" label="Fecha" no-spinner .value="${this.item.fecha.substr(0,10)}"></nano-input>
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="realizado">Realizado</label>
                    <select style="width:100%" id="realizado" >          
                        <option value="S" .selected="${this.item.realizado=="S"}">SI</option>
                        <option value="N" .selected="${this.item.realizado=="N"}">NO</option>
                       
                    </select>  
                </div>           
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${this.agregando?"Agregar":"Guardar"}</div>
            </div>  
        `
    }

    stateChanged(state, name) {

        if (name == OPCION_SELECCIONADA) this.oculto = state.ui.opcionSeleccionada.option != "HISTORIA CLINICA"
        if (name == HC_SELECCIONADA) this.item = {
            ...state.hc.selectedItem
        }
        if (!this.oculto) this.shadowRoot.querySelector("#descripcion").focus()
        this.agregando = state.hc.currentTask == "ADD"

        this.update()
    }

    cerrar() {
        //funciona solo para media samll
        this.shadowRoot.host.offsetParent.editando = false
    }
    salvar() {

        const fecha = new Date(this.shadowRoot.querySelector("#fecha").value.replace(/-/g, "/"))
        this.item = {
            descripcion: this.shadowRoot.querySelector("#descripcion").value,
            fecha: fecha.toJSON(),
            realizado: this.shadowRoot.querySelector("#realizado").value,
            idMascota: store.getState().mascotas.currentId
        }
        this.update()
        if (store.getState().hc.currentTask == "ADD") store.dispatch(addHC(this.item))
        if (store.getState().hc.currentTask == "UPDATE") store.dispatch(updateHC(this.item))
        this.cerrar()
    }
    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            },
            agregando: {
                type: Boolean,
                reflect: true
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'

            },
            editando: {
                type: Boolean,
                reflect: true
            },

        }
    }
}
window.customElements.define("app-hc", appHC);