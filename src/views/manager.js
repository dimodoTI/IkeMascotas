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
import {
    NARANJA,
    MENU
} from "../../assets/icons/icons";
import {
    toggleMenu
} from "../redux/actions/ui";

const MEDIA_CHANGE = "ui.media.timeStamp"
const MENU_OPEN = "ui.menuOpen"
export class viewManager extends connect(store, MEDIA_CHANGE, MENU_OPEN)(LitElement) {
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

        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .2rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
      
        .botonMenu{
            justify-self:end;
        }
        :host(:not([media-size="small"])) .botonMenu,:host(:not([media-size="small"])) #velo{
            display:none
        }
        :host(:not([menu-open])) #velo{
            display:none
        }
        #velo{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,.5)
        }
        #menu{
            z-index:10
        }
        `
    }
    render() {
        return html `
        <div id="status">
            <div class="naranja">${NARANJA}</div>
            <div class="botonMenu" @click="${this.toggleMenu}">
                <div>${MENU}</div>
            </div>
            <app-menu id="menu" media-size="${this.mediaSize}" .open="${this.menuOpen}"></app-menu>
        </div>   

        <div id="cuerpo">
           
        </div>
        <hc2-spinner  type="2"></hc2-spinner>
        <app-titular media-size="${this.mediaSize}"></app-titular>
        <lista-mascotas media-size="${this.mediaSize}"></lista-mascotas>
        <lista-hc  media-size="${this.mediaSize}"></lista-hc>
        <lista-agenda  media-size="${this.mediaSize}"></lista-agenda>
        <lista-calendario media-size="${this.mediaSize}"></lista-calendario>
        <div id="velo" @click="${this.toggleMenu}"></div>
        `
    }

    stateChanged(state, name) {
        if (name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size
            this.update()
        }
        if (name == MENU_OPEN) {
            this.menuOpen = state.ui.menuOpen
            this.update()
        }

    }
    toggleMenu(e) {
        store.dispatch(toggleMenu())
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'

            },
            menuOpen: {
                type: Boolean,
                reflect: true,
                attribute: 'menu-open'
            }

        }
    }
}
window.customElements.define("view-manager", viewManager);