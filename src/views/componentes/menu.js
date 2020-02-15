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
    MASCOTA
} from "../../../assets/icons/icons"

export class appMenu extends connect(store)(LitElement) {
    constructor() {
        super();

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
            justify-items:center
        
        }
       
       
        
        `
    }
    render() {
        return html `
            <div class="boton" @click="${this.selectMenu}" .value="${"TITULAR"}">
                <div>${TRABAJADOR}</div>
                <div>TITULAR</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"MASCOTAS"}">
                <div>${MASCOTA}</div>
                <div>MASCOTAS</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"CALENDARIO VACUNACION"}">
                <div>${CAPAS}</div>
                <div>CALENDARIO VACUNACION</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"HISTORIA CLINICA"}">
                <div>${HOSPITAL}</div>
                <div>HISTORIA CLINICA</div>
            </div>
            <div class="boton" @click="${this.selectMenu}" .value="${"AGENDA VACUNACION"}">
                <div>${ALARMA}</div>
                <div>AGENDA VACUNACION</div>
            </div>
            
                
        
        `
    }

    selectMenu(e) {
        store.dispatch(selectMenu(e.currentTarget.value))
    }

    stateChanged(state, name) {

    }

    static get properties() {
        return {

        }
    }
}
window.customElements.define("app-menu", appMenu);