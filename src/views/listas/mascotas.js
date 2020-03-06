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
    LEFT,
    LISTA_ADD,
    FOTO,
    HOSPITAL,
    ALARMA,
    TRASH,
    NARANJA,
    MENU,
} from "../../../assets/icons/icons";
import {
    select,
    setCurrent as setCurrentMascota,
    newItem
} from "../../redux/actions/mascotas"
import {

    newItem as newHC
} from "../../redux/actions/hc"
import {

    newItem as newAgenda
} from "../../redux/actions/agenda"
import {
    appMascota
} from "../formularios/mascota"
import {
    selectMenu,
    toggleMenu
} from "../../redux/actions/ui";

const MASCOTAS = "mascotas.timeStamp"

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class listaMascotas extends connect(store, MASCOTAS, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.items = []
        this.editando = false

    }

    static get styles() {
        return css `
        ${card}
        ${boton}
        ${input}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr auto;
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            background-color:white;
            color:black;
            grid-gap:.5rem;
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
        
        :host([media-size="small"][editando]) #lista{
            display:none
        }
      
        :host(:not([media-size="small"])){
            width:70%;
            height:80%;    
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
           
        }
        
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;           
            background-color:white;
            padding:0;
            grid-gap:0;
            align-items:start
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
            grid-template-columns:2fr 1fr;
            grid-gap:.5rem;
            padding:.5rem;
        }
        :host([media-size="small"]) #cuerpo{           
            grid-template-columns: 1fr;
            width:100%;
            padding:0
            
        }
       
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
        }
        :host([media-size="small"]) #lista{
            padding:.3rem
        }
        :host([media-size="small"]) .row{
            padding:0
        }
        :host([media-size="small"]) .row .datos{
            color:black
        }
        :host([media-size="small"]) .row #fecha{
            display:none
        }
        :host([media-size="small"]) .row .foto{
            display:grid;
            background-color:var(--orange-5);
            align-self:stretch;
            justify-self:stretch;
            align-items:center;
            justify-content:center;
            padding:.3rem
        }
        :host([media-size="small"]) .row .foto svg{
            display:grid;
            height:2rem;
            width:2rem;
        }
        :host([media-size="small"]) .row .foto .circulo{
            display: grid;
            background-color: white;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            align-items: center;
            justify-items: center;
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 5fr auto auto auto;
            background-color:white;
            box-shadow:var(--shadow-elevation-2-box);
            min-height:4rem;
            padding:.3rem;
            align-items:center;
            cursor:pointer
        }
        .row .foto svg{
            height:3rem;
            width:3rem;
            stroke:white;          
        }
        .row .datos {
            display:grid;
            grid-auto-flow:row
        }
        .row .datos .nombre {
           color:var(--orange);
           font-size:1.2rem;
           font-weight:bold
        }
        .row .datos .otros{
          display:grid;
          grid-auto-flow:column;
        }
        .emptyRow{
            display:grid;
            grid-auto-flow:row;
            background-color:rgba(0,0,0,.1);
            height:3rem;
        }
       
        :host([media-size="small"]) .botonTarjeta{
            align-self:start;
         
        }
        .botonera{
            display:grid;
            grid-auto-flow:row;
            padding:1rem;
            
        }
        nano-input {
            color:black;
            background-color:white;
            border-radius:0;
        }       

        `
    }
    render() {
        return html `
         
        <div id="status" style="font-weight:bold"> 
            <div>${NARANJA}</div>
            <div style="justify-self:end" @click="${this.cerrar}">${MENU}</div>
        </div>       
        <div id="titulo">
            <div>Mascota/s</div>
        </div>
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-mascota id="formulario" media-size="${this.mediaSize}" ?editando="${this.editando}"></app-mascota>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">Nueva Mascota</div>
        </div>
            
        `
    }

    getRow() {
        if (this.items.length > 0) {
            return this.items.map(item => html `
                <div class="row" .item=${item} @click="${this.seleccionar}">

                    <div class="foto"><div class="circulo">${FOTO}</div></div>
                    <div class="datos">
                        <div class="nombre">${item.nombre}</div>
                        <div class="otros" style="overflow-x:visible">                                                    
                            <div id="fecha">${new Date(item.FN).toDateString()}</div>
                            <div>(${item.tipo})</div>
                        </div>
                        
                    </div>
                   
                    <div class="botonTarjeta" @click="${this.verVacunas}" .item="${item}">${ALARMA}</div>
                    <div class="botonTarjeta" @click="${this.verHistoria}" .item="${item}">${HOSPITAL}</div>
                    <div class="botonTarjeta">${TRASH}</div> 
                  
                </div>
                `)
        } else {
            const listaVacia = [1, 2, 3, 4, 5, 6]

            return listaVacia.map(item => html `
                <div class="emptyRow">

                </div>
                `)

        }
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "MASCOTAS"
            if (!this.oculto) {
                this.items = state.mascotas.entities
            }
        }
        if (name == MASCOTAS) {
            this.items = state.mascotas.entities
            this.update()
        }
    }

    verHistoria(e) {
        store.dispatch(setCurrentMascota(e.currentTarget.item.id))
        store.dispatch(newHC())
        store.dispatch(selectMenu("HISTORIA CLINICA"))
    }
    verVacunas(e) {
        store.dispatch(setCurrentMascota(e.currentTarget.item.id))
        store.dispatch(newAgenda())
        store.dispatch(selectMenu("AGENDA VACUNACION"))
    }

    agregar(e) {
        store.dispatch(newItem())
        this.editando = true;

    }
    seleccionar(e) {

        store.dispatch(select(e.currentTarget.item))
        this.editando = true;

    }
    cerrar() {
        this.oculto = true
        store.dispatch(toggleMenu())
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
            },
            editando: {
                type: Boolean,
                reflect: true
            }

        }
    }
}
window.customElements.define("lista-mascotas", listaMascotas);