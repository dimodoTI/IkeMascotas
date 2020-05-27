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
    ACEPTAR,
    LEFT,
    NARANJA
} from "../../../assets/icons/icons";
import {
    add as addMascota,
    update as updateMascota,
    remove as removeMascota,
    select as selectMascota
} from "../../redux/actions/mascotas"

import {
    nanoInput
} from "@brunomon/nano-input"

const MASCOTA_SELECCIONADA = "mascotas.selectedTimeStamp"
const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class appMascota extends connect(store, MASCOTA_SELECCIONADA, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.item = {}
        this.editando = false

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
        .naranja{
            display:grid;
            grid-template-columns:auto 1fr;
            align-items:center;
            grid-gap:.3rem;
            font-size:1.2rem
        }
        
        `
    }
    render() {
        return html `
            <div id="status" style="font-weight:bold"> 
                <div class="naranja">
                    <div>${NARANJA}</div>
                    <div>${process.env.SUBTITULO}</div>
                </div>
                <div class="" @click="${this.cerrar}" id="cerrar">${LEFT}</div>
            </div>       
            <div id="titulo">
                <div>Mi Mascota</div>
            </div>
            
            <div id ="cuerpo">
                <div class="select" style="width:15rem;height:3rem">
                    <label for="tipo">Tipo</label>
                    <select style="width:100%" id="tipo" >          
                        <option value="Canino" .selected="${this.item.tipo=="Canino"}">Canino</option>
                        <option value="Felino" .selected="${this.item.tipo=="Felino"}">Felino</option>
                        <option value="Otro" .selected="${this.item.tipo=="Otro"}">Otro</option>
                    </select>
                </div>
                <nano-input style="width:15rem" id="nombre" type="text" label="Nombre" .value="${this.item.nombre}"></nano-input>
                <nano-input style="width:15rem" id="nacimiento" type="date" label="Nacimiento" no-spinner .value="${this.item.FN.substr(0,10)}"></nano-input>              
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${this.agregando?"Agregar":"Guardar"}</div>
            </div>   
        `
    }

    stateChanged(state, name) {

        if (name == OPCION_SELECCIONADA) this.oculto = state.ui.opcionSeleccionada.option != "MASCOTA"
        if (name == MASCOTA_SELECCIONADA) this.item = {
            ...state.mascotas.selectedItem
        }
        if (!this.oculto) this.shadowRoot.querySelector("#nombre").focus()

        this.agregando = state.mascotas.currentTask == "ADD"

        this.update()
    }

    cerrar() {
        //funciona solo para media samll
        this.shadowRoot.host.offsetParent.editando = false
    }
    salvar() {

        const fn = new Date(this.shadowRoot.querySelector("#nacimiento").value.replace(/-/g, "/"))
        this.item = {
            nombre: this.shadowRoot.querySelector("#nombre").value,
            FN: fn.toJSON(),
            imagen: null,
            tipo: this.shadowRoot.querySelector("#tipo").value,
        }
        this.update()
        if (store.getState().mascotas.currentTask == "ADD") store.dispatch(addMascota(this.item))
        if (store.getState().mascotas.currentTask == "UPDATE") store.dispatch(updateMascota(this.item))
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
window.customElements.define("app-mascota", appMascota);