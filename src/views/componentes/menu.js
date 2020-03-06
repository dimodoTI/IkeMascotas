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
    boton
} from "../css/boton"

import {
    selectMenu,
    toggleMenu
} from "../../redux/actions/ui"

import {
    TRABAJADOR,
    HOSPITAL,
    ALARMA,
    CAPAS,
    MASCOTA,
    LEFT,
    RIGHT,
    MENU,
    NARANJA
} from "../../../assets/icons/icons"

export class appMenu extends connect(store)(LitElement) {
    constructor() {
        super();
        this.open + false

    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            transition: all .5s;
            overflow-x:hidden;
            font-size:1.2rem;
            font-weight:bold;
         
        }
        :host([media-size="medium"]) .open,:host([media-size="large"]) .open{
            display:none

        }
        :host([media-size="medium"]) .boton{
            grid-auto-flow:row;
            justify-items:center

        }
        
        :host([media-size="small"]) {
            position:absolute;
            grid-gap:2rem;
            left:100vw;
            grid-auto-flow:row;
            justify-items: start;
            align-items:start;
            align-content:start;
            height: 100vh;
            width:75vw;
            font-size:.85rem;
            font-weight:bold;
            background-color:white;
            
        }
       /*  :host([media-size="small"]:not([open])) .label{
            display:none
        } */
        :host([media-size="small"][open]) {         
            left:25vw;
        }

        :host(:not([media-size="small"])) .botonMenu{
            display:none
        }

        .label{
            color:#333333;
            cursor:pointer
        }
        :host([media-size="small"]) .label{
            margin-left:1rem
        }
      
        .menuItem:hover .label{
            color:var(--orange);
            
        }
        .botonMenu{
            stroke:var(--orange);
            fill:var(--orange);
            color:var(--orange);
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            font-size:1.5rem;
            background-color:#f4f3f1;
            justify-self:stretch;
            align-self:stretch;
            padding:1rem

        }
        .separador{
            
            border-bottom:1px solid #e3e3e3;
        }
        
        `
    }
    render() {
        return html `

            <div class="botonMenu separador" @click="${this.toggle}">
                <div>Naranja</div>
            </div>
            
            <div class="menuItem" @click="${this.selectMenu}" .value="${"TITULAR"}">
                <!-- <div>${TRABAJADOR}</div> -->
                <div class="label">Titular</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"MASCOTAS"}">
                <!-- <div>${MASCOTA}</div> -->
                <div class="label">Mascotas</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"CALENDARIO VACUNACION"}">
                <!-- <div>${CAPAS}</div> -->
                <div class="label">Calendario Vacunación</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"HISTORIA CLINICA"}">
                <!-- <div>${HOSPITAL}</div> -->
                <div class="label">Historia Clínica</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"AGENDA VACUNACION"}">
                <!-- <div>${ALARMA}</div> -->
                <div class="label">Agenda Vacunacion</div>
            </div>
           
        `
    }

    selectMenu(e) {
        store.dispatch(toggleMenu())
        store.dispatch(selectMenu(e.currentTarget.value))
    }

    toggle(e) {
        store.dispatch(toggleMenu())
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            },
            open: {
                type: Boolean,
                reflect: true

            }

        }
    }
}
window.customElements.define("app-menu", appMenu);