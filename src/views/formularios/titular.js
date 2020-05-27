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
    ACEPTAR,
    LEFT,
    NARANJA,
    MENU
} from "../../../assets/icons/icons";
import {
    update
} from "../../redux/actions/titular"

import {
    nanoInput
} from "@brunomon/nano-input"
import {
    selectMenu,
    toggleMenu
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
            grid-template-rows:auto auto 5fr 1fr 2fr auto;          
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            padding-bottom:1rem;
            background-color:white;
            color:black;
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
        :host(:not([media-size="small"])){
            width:30%;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
       
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;         
        }

        :host([oculto]){
            left:-50rem
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
            grid-gap:.5rem;
            background-color:#f4f3f1
        }
        #botonera{
            display:grid;
        }
        nano-input {
            color:black;
            background-color:white;
            border-radius:0;
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
            <div id="status">
                <div class="naranja">
                    <div>${NARANJA}</div>
                    <div>${process.env.SUBTITULO}</div>
                </div>
                <div style="justify-self:end" @click="${this.cerrar}">${LEFT}</div>
            </div>     
            <div id="titulo">
                <!-- <div class="boton botonBlanco" @click="${this.cerrar}">${LEFT}</div> -->
                <div>Mis Datos</div>
            </div>
            <div id ="cuerpo">
                <nano-input style="width:15rem" id="nombre" type="text" label="Apellido y Nombre" .value="${this.item.nombre}"></nano-input>
                <nano-input style="width:15rem" id="documento" type="number" label="Numero de Documento" no-spinner .value="${this.item.documento}"></nano-input>              
            </div>  
          <!--   <a href="#">Politica de Privacidad</a>
            <div id="cartel">
                Por favor comuniquese con Iké Asistencia para regularizar su situación
            
            </div> -->
            <div id="botonera" class="boton" @click="${this.salvar}">
                <!-- <div>${ACEPTAR}</div> -->
                <div>Aceptar</div>
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
        store.dispatch(toggleMenu())
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
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}
window.customElements.define("app-titular", appTitular);