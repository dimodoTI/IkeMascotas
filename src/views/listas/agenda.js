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
    LEFT,
    LISTA_ADD,
    TRASH,
    NARANJA,
    MENU,

} from "../../../assets/icons/icons";
import {
    select,

    newItem
} from "../../redux/actions/agenda"
import {
    appAgenda
} from "../formularios/agenda"
import {
    selectMenu,
    toggleMenu
} from "../../redux/actions/ui";
import {
    comboMascota
} from "../combos/mascotas"

const AGENDA = "agenda.timeStamp"
const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const CURRENT_MASCOTA = "mascotas.currentTimeStamp"

export class listaAgenda extends connect(store, AGENDA, OPCION_SELECCIONADA, CURRENT_MASCOTA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.items = []
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
            height:90%;    
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
            
        }
        :host([media-size="small"]) #cuerpo{           
            grid-template-columns: 1fr;
            width:100%;
            padding:0
            
        }
        :host([media-size="small"]) #fecha{
           display:none
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
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr  auto;
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
        :host([media-size="small"]) .row .datos{
            color:black
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
        :host([media-size="small"]) .emptyRow{
          
            background-color:rgba(0,0,0,.1);
           
        }
        :host([media-size="small"]) .row{
            background-color:white;
            box-shadow:var(--shadow-elevation-3-box);
            padding:.2rem
        }
        :host([media-size="small"]) .botonTarjeta{
            align-self:start;
         
        }
        .botonera{
            display:grid;
            grid-auto-flow:row;
            padding:1rem;
            
        }
        .subtit{
            font-weight:bold;
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            align-items:center;
           
            justify-self: stretch;
            padding: .3rem;
        }
       
        :host([media-size="small"]) .subtit{
            
            justify-items: start;
           
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
        <div id="status" style="font-weight:bold"> 
            <div class="naranja">
                <div>${NARANJA}</div>
                <div>${process.env.SUBTITULO}</div>
            </div>
            <div style="justify-self:end" @click="${this.cerrar}">${LEFT}</div>
        </div>       
        <div id="titulo">
            <div>Agenda de Vacunación</div>
        </div>
        
        <div class="subtit">
               
                <combo-mascota .mediaSize="${this.mediaSize}"></combo-mascota>
        </div>   
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-agenda id="formulario" media-size="${this.mediaSize}" ?editando="${this.editando}"></app-agenda>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">Nueva Vacuna</div>
        </div>
            
        `
    }

    getRow() {
        if (this.items.length > 0) {
            return this.items.map(item => html `
                <div class="row" .item=${item} @click="${this.seleccionar}">
                   
                    <div class="datos">
                        <div class="nombre">${this.getVacuna(item.idVacuna)}</div>
                        <div class="otros">
                            <div>${new Date(item.fecha).toDateString()}</div>
                            <div>${item.realizado=="S"?"Realizado":"Sin realizar"}</div>
                        </div>
                        
                    </div>                             
                    <div class="">${TRASH}</div>
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

    getVacuna(id) {
        const vacunas = [
            "",
            "Corona Virus",
            "Giardias",
            "Quintuple",
            "Rabia",
            "Sextuple",
            "Tos de las perreras"
        ]
        return vacunas[id]
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "AGENDA VACUNACION"
            if (!this.oculto) {
                this.items = state.agenda.entities.filter(item => item.idMascota == state.mascotas.currentId)
            }
        }
        if (name == AGENDA) {
            this.items = state.agenda.entities.filter(item => item.idMascota == state.mascotas.currentId)

        }
        if (name == CURRENT_MASCOTA) {
            this.items = state.agenda.entities.filter(item => item.idMascota == state.mascotas.currentId)

        }
        this.update()
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
window.customElements.define("lista-agenda", listaAgenda);