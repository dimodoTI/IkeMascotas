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
    MENU
} from "../../assets/icons/icons";
import {
    toggleMenu
} from "../redux/actions/ui";
import {
    NARANJA,
    TELEFONO
} from "../../assets/icons/icons"

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
            grid-template-rows:auto 1fr auto;
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

        .whats{
            display:grid;
            grid-gap:.3rem;
            justify-self:stretch;
            align-items:center;
            justify-items:end;
            font-size:1.5rem;
            color:rgb(51, 51, 51);;
            background-color:rgb(244, 243, 241);
        }
        .whats .botonW{
            display:grid;
            grid-template-columns:auto 1fr;
            align-items:center

        }
        .whats svg{
            cursor:pointer;
            width:2rem;
            height:2rem;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            padding:.3rem
            
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
        
        <div class="whats" >
            <div class="botonW">
                <div>Asistencia</div>
                ${TELEFONO}
            </div>
            <div class="botonW">
                <div>Veterinario On Line</div>
                <div @click="${this.llamarWhatsapp}">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="2rem" height="2rem" viewBox="0 0 1280.000000 720.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(-450.000000,1000.000000) scale(0.1800000,-0.1800000)">
                            <path d="M6255 6844 c-540 -35 -1107 -229 -1555 -532 -473 -320 -848 -752 -1091 -1256 -133 -276 -216 -536 -273 -856 -43 -240 -52 -602 -22 -880 40 -374 177 -822 362 -1188 l53 -103 -123 -367 c-68 -202 -191 -570 -274 -818 -84 -249 -152 -459 -152 -469 0 -9 13 -22 29 -28 26 -10 29 -14 24 -45 -6 -32 -5 -34 18 -27 41 13 936 298 1314 420 198 63 368 115 378 115 9 0 52 -17 95 -39 366 -184 756 -294 1171 -332 164 -14 498 -7 659 16 954 132 1766 659 2266 1468 163 264 318 632 401 952 79 307 117 688 96 982 -54 781 -356 1473 -881 2017 -509 527 -1157 853 -1895 952 -108 14 -482 26 -600 18z m391 -684 c357 -29 650 -108 959 -259 419 -206 770 -514 1030 -906 200 -301 323 -625 371 -979 23 -168 23 -508 0 -680 -163 -1209 -1161 -2141 -2372 -2217 -427 -26 -824 44 -1212 214 -107 47 -284 143 -339 183 -17 13 -39 24 -49 24 -9 0 -222 -65 -472 -145 -250 -80 -456 -145 -457 -143 -2 2 62 197 141 433 79 237 144 442 144 458 0 16 -18 53 -44 90 -418 599 -554 1426 -351 2127 45 152 82 245 155 390 200 391 505 732 880 982 473 316 1064 472 1616 428z"></path>
                            <path d="M5323 5236 c-23 -7 -56 -23 -75 -34 -51 -32 -199 -190 -245 -262 -147 -229 -180 -534 -92 -832 67 -225 149 -397 299 -629 190 -292 313 -450 510 -653 296 -305 545 -476 927 -635 282 -118 490 -185 607 -197 81 -8 258 20 362 58 144 52 309 168 373 262 64 96 130 313 138 457 l6 95 -31 36 c-22 24 -112 78 -294 176 -432 232 -487 254 -555 218 -17 -8 -81 -73 -141 -143 -178 -207 -215 -243 -245 -243 -38 0 -287 127 -403 205 -135 92 -223 166 -334 281 -132 137 -275 333 -355 486 l-18 36 72 79 c95 101 134 162 172 268 39 108 37 141 -20 290 -51 133 -92 243 -163 434 -58 157 -101 221 -161 240 -57 17 -287 22 -334 7z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        `
    }
    llamarWhatsapp(e) {
        let url = "https://api.atencionike.com.ar/services/socio?pDocumento=" + store.getState().titular.entity.documento
        fetch(url)
            .then(function (response) {
                let resp = response.json();
                if (resp.Cobertura) {
                    location.href = "https://api.whatsapp.com/send?phone=5491134427999&text=Necesito un veterinario on line&source=&data="
                } else {
                    alert("No se encontró su cuenta o se encuentra sin cobertura. Verifique su número de documento")
                }
            })
            .catch(function (myJson) {
                alert("Sin conección... intenete mas tarde")
            });

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