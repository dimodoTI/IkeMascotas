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
    input
} from "../css/input"

import {
    CANCELAR,
    ACEPTAR
} from "../../../assets/icons/icons";
import {
    update
} from "../../redux/actions/titular"

import {
    nanoInput
} from "@brunomon/nano-input"
import {
    selectMenu
} from "../../redux/actions/ui";


const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const TITULAR = "titular.timeStamp"

export class appTitular extends connect(store, OPCION_SELECCIONADA, TITULAR)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.item = {
            nombre: "",
            documento: null
        }

    }

    static get styles() {
        return css `
        ${card}
        ${boton}
        

       
        :host{
            position:absolute;
            display:grid;
            grid-auto-flow:rows;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            transition: all .5s ease-in-out;
            padding-bottom:1rem;
            width:30%
           
       
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
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
                <div style="font-weight:bold">MIS DATOS</div>
                <div class="boton" @click="${this.cerrar}">${CANCELAR}</div>
            </div>
            <div id ="cuerpo">
                <nano-input style="width:15rem" id="nombre" type="text" label="Apellido y Nombre" .value="${this.item.nombre}"></nano-input>
                <nano-input style="width:15rem" id="documento" type="number" label="Numero de Documento" no-spinner .value="${this.item.documento}"></nano-input>              
            </div>  
            <a href="#">Politica de Privacidad</a>
            <div id="cartel">
                Por favor comuniquese con Iké Asistencia para regularizar su situación
            
            </div>
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${ACEPTAR}</div>
                <div>ACEPTAR</div>
            </div>  
        `
    }


    stateChanged(state, name) {
        if (name == TITULAR) this.item = state.titular.entity
        if (name == OPCION_SELECCIONADA) this.oculto = state.ui.opcionSeleccionada.option != "TITULAR"
        if (!this.oculto && this.shadowRoot.querySelector("#nombre")) this.shadowRoot.querySelector("#nombre").focus()
    }

    cerrar() {
        this.oculto = true
        store.dispatch(selectMenu(""))

    }
    salvar() {
        store.dispatch(update(this.shadowRoot.querySelector("#nombre").value, this.shadowRoot.querySelector("#documento").value))
        this.oculto = true
    }
    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            }

        }
    }
}
window.customElements.define("app-titular", appTitular);