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
    selectMenu
} from "../../redux/actions/ui"

import {
    TRABAJADOR,
    HOSPITAL,
    ALARMA,
    CAPAS,
    MASCOTA,
    LEFT,
    RIGHT
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
            
            background-color:rgb(0,0,0,.3);
            align-items:center;
            justify-items:center;
            transition: width .5s;
            overflow-x:hidden
        
        }
        :host([media-size="medium"]) .open,:host([media-size="large"]) .open{
            display:none

        }
        :host([media-size="medium"]) .boton{
            grid-auto-flow:row;
            justify-items:center

        }
        
        :host([media-size="small"]) {
            grid-auto-flow:row;
            justify-items: start;
            padding: .5rem;
            height: 100vh;
            width: 2rem;
        }
        :host([media-size="small"]:not([open])) .label{
            display:none
        }
        :host([media-size="small"][open]) {         
            width: 70vw;
        }
       
       
        
        `
    }
    render() {
        return html `

           
        
            <div class="boton" @click="${this.selectMenu}" .value="${"TITULAR"}">
                <div>${TRABAJADOR}</div>
                <div class="label">TITULAR</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"MASCOTAS"}">
                <div>${MASCOTA}</div>
                <div class="label">MASCOTAS</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"CALENDARIO VACUNACION"}">
                <div>${CAPAS}</div>
                <div class="label">CALENDARIO VACUNACION</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"HISTORIA CLINICA"}">
                <div>${HOSPITAL}</div>
                <div class="label">HISTORIA CLINICA</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"AGENDA VACUNACION"}">
                <div>${ALARMA}</div>
                <div class="label">AGENDA VACUNACION</div>
            </div>
            <div class="boton open" @click="${this.toggle}">
                <div>${this.open?LEFT:RIGHT}</div>
                
            </div>
            
           
        
        `
    }

    selectMenu(e) {
        this.open = false
        store.dispatch(selectMenu(e.currentTarget.value))
    }

    toggle(e) {
        this.open = !this.open
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true
            },
            open: {
                type: Boolean,
                reflect: true
            }

        }
    }
}
window.customElements.define("app-menu", appMenu);