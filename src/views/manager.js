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
} from "../redux/store";
import {
    boton
} from "./css/boton"
import {
    card
} from "./css/card"
import {
    appMenu
} from "./componentes/menu"
import {
    appTitular
} from "./formularios/titular"
import {
    listaMascotas
} from "./listas/mascotas"
import {
    listaHC
} from "./listas/hc"
import {
    listaAgenda
} from "./listas/agenda"
import {
    listaCalendario
} from "./listas/calendario"

const MEDIA_CHANGE = "ui.media.timeStamp"
export class viewManager extends connect(store, MEDIA_CHANGE)(LitElement) {
    constructor() {
        super();
        this.current = "IKE-MAscotas";
    }

    static get styles() {
        return css `
        ${boton}
        :host{
            display: grid;                 
            grid-gap:1rem;
            padding:2rem;
            height:100vh;
            width: 100vw;
            scrollbar-width: thin;
            scrollbar-color: #999 transparent;
            box-sizing: border-box;
            grid-template-rows:1fr 9fr;
            padding:0
            
     
        }
        :host::-webkit-scrollbar-track
        {
            border-radius: .3rem;
            background-color: transparent;
        }
        :host::-webkit-scrollbar
        {
            width:.4rem;
        }
        :host::-webkit-scrollbar-thumb
        {
            border-radius: .3rem;
            background-color: #999
        }
        
        
 
        
        `
    }
    render() {
        return html `
        <app-menu id="menu" media-size="${this.mediaSize}"></app-menu>
       
        <div id="cuerpo">
           

        </div>
        <hc2-spinner  type="2"></hc2-spinner>
        <app-titular media-size="${this.mediaSize}"></app-titular>
        <lista-mascotas media-size="${this.mediaSize}"></lista-mascotas>
        <lista-hc  media-size="${this.mediaSize}"></lista-hc>
        <lista-agenda  media-size="${this.mediaSize}"></lista-agenda>
        <lista-calendario media-size="${this.mediaSize}"></lista-calendario>
        `
    }

    stateChanged(state, name) {
        if (name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }

    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true
            }
        }
    }
}
window.customElements.define("view-manager", viewManager);