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
        #botonera{
            display:grid;
            
   
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
                <div>MI MASCOTA</div>
                <div class="boton" id="cerrar" @click="${this.cerrar}">${CANCELAR}</div>
                
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
                <div>${ACEPTAR}</div>
                <div>${this.agregando?"AGREGAR":"GUARDAR"}</div>
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