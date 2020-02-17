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
    CANCELAR,
    ACEPTAR
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
            grid-auto-flow:rows;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
        }
        
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:var(--color-formulario);
            padding:.5rem;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }
        :host([oculto]){
            left:-50rem
        }
        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
        }
       
        #titulo{
            display:grid;
            width:100%;
            grid-template-columns:1fr auto;
            justify-items:center;
            grid-gap:.5rem;
            color:white;
            stroke:white;
            fill:white;
            align-items:center;
            margin:.5rem
        }
        
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        
        #cartel{
            color:white;
            border:2px solid var(--color-destacado);
            max-width:10rem;
            padding:.3rem;
            font-size:.8rem
        }
        a {
            color:var(--color-destacado);
            font-size: .8rem
        }
        nano-input {
            color:white;
            background-color:rgb(0,0,0,.3);
            border-radius:4px
        }
        

        
        `
    }
    render() {
        return html `
            <div id="titulo">
                <div>ESTUDIO</div>
                <div class="boton" id="cerrar" @click="${this.cerrar}">${CANCELAR}</div>
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
                <div>${ACEPTAR}</div>
                <div>${this.agregando?"AGREGAR":"GUARDAR"}</div>
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