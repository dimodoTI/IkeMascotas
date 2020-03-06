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
    LISTA_ADD,
    FOTO,
    HOSPITAL,
    ALARMA,
    LEFT,
    NARANJA,
    MENU
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

const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class listaCalendario extends connect(store, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.items = []
    }

    static get styles() {
        return css `
        ${card}
        ${boton}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr;
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
            grid-template-columns:1fr;
            grid-gap:.5rem;
            padding:.5rem;
        }
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
            scrollbar-width: thin;
            scrollbar-color: #999 transparent;
            box-sizing: border-box;
        }
        :host([media-size="small"]) #lista{
            height:80vh;
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            min-height:4rem;
            padding:.3rem;
            align-items:center;
        
        }
      
        .cabeceraRow{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            padding:.3rem;
            color:var(--primary-color);
            align-items:center;
           
        }
        
        #lista::-webkit-scrollbar-track
        {
            border-radius: .3rem;
            background-color: transparent;
        }
        #lista::-webkit-scrollbar
        {
            width:.4rem;
        }
        #lista::-webkit-scrollbar-thumb
        {
            border-radius: .3rem;
            background-color: #999
        }

        .smallRow{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            box-shadow:var(--shadow-elevation-3-box);
            min-height:12rem;
            padding:.3rem;
            align-items:center;
        }
        :host([media-size="small"]) .smallRow{
            background-color:white;
            color:black
        }
        :host([media-size="small"]) .cabeceraRow{
            display:none
        }
        .valor{
            display:grid;
            grid-template-columns:2fr 3fr;
            grid-gap:.3rem
        }
        .label{
            color:var(--primary-color);
            font-size:.8rem
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
            <div>Calendario de Vacunación</div>
        </div>
        
        <div id="cuerpo">
            <div class="cabeceraRow">
             
                        <div class="cachorro">Cachorro</div>
                        <div class="edad">Edad</div>
                        
                        <div class="obligatorio">Obligatoriedad</div>
                        <div class="periodo">Periodo</div>

                        <div class="vacuna">Vacuna</div>
                        <div class="enfermedad">Enfermedades</div>
                                              
            </div>
            <div id="lista">
                ${this.getRow()}
            </div>
            
        </div>
        
        `
    }

    getRow() {

        if (this.mediaSize == "small") {
            return this.items.map(item => html `
                <div class="smallRow">
             
                        <div class="valor"><div class="label">Cachorro:</div>${item.cachorro}</div>
                        <div class="valor"><div class="label">Edad:</div>${item.edad}</div>
                        
                        <div class="valor"><div class="label">Obligatoriedad:</div>${item.obligatorio}</div>
                        <div class="valor"><div class="label">Periodo:</div>${item.periodo}</div>

                        <div class="valor"><div class="label">Vacuna:</div>${item.vacuna}</div>
                        <div class="valor"><div class="label">Enfermedades:</div>${item.enfermedad}</div>
                                              
                </div>
                `)
        } else {

            return this.items.map(item => html `
                <div class="row">
             
                        <div class="cachorro">${item.cachorro}</div>
                        <div class="edad">${item.edad}</div>
                        
                        <div class="obligatorio">${item.obligatorio}</div>
                        <div class="periodo">${item.periodo}</div>

                        <div class="vacuna">${item.vacuna}</div>
                        <div class="enfermedad">${item.enfermedad}</div>
                                              
                </div>
                `)
        }

    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "CALENDARIO VACUNACION"
            if (!this.oculto) {
                this.items = [{
                        cachorro: "Canino",
                        edad: "Cachorro",
                        obligatorio: "obligatorio",
                        periodo: "45 días",
                        vacuna: "Cuádruple",
                        enfermedad: "Tos de las perreras-Hepatitis-Moquillo-Parvovirus"
                    }, {
                        cachorro: "Canino",
                        edad: "Cachorro",
                        obligatorio: "obligatorio",
                        periodo: "65 días",
                        vacuna: "Cuádruple",
                        enfermedad: "Tos de las perreras-Hepatitis-Moquillo-Parvovirus"
                    },
                    {
                        cachorro: "Canino",
                        edad: "Cachorro",
                        obligatorio: "obligatorio",
                        periodo: "95 días",
                        vacuna: "Séxtuple",
                        enfermedad: "Tos de las perreras-Hepatitis-Moquillo-Parvovirus"
                    }, {
                        cachorro: "Canino",
                        edad: "Cachorro",
                        obligatorio: "obligatorio",
                        periodo: "120 días",
                        vacuna: "Séxtuple",
                        enfermedad: "Tos de las perreras-Hepatitis-Moquillo-Parvovirus"
                    }, {
                        cachorro: "Canino",
                        edad: "Cachorro",
                        obligatorio: "obligatorio",
                        periodo: "6 meses",
                        vacuna: "Rabia",
                        enfermedad: "Rabia"
                    }, {
                        cachorro: "Canino",
                        edad: "Adulto",
                        obligatorio: "obligatorio",
                        periodo: "Anual",
                        vacuna: "Sextuple",
                        enfermedad: "Tos de las perreras-Hepatitis-Moquillo-Parvovirus"
                    }, {
                        cachorro: "Canino",
                        edad: "Adulto",
                        obligatorio: "obligatorio",
                        periodo: "Anual",
                        vacuna: "Rabia",
                        enfermedad: "Rabia"
                    }, {
                        cachorro: "Canino",
                        edad: "Adulto",
                        obligatorio: "optativa",
                        periodo: "Anual",
                        vacuna: "Corona Virus",
                        enfermedad: "Corona Virus"
                    }, {
                        cachorro: "Canino",
                        edad: "Adulto",
                        obligatorio: "optativa",
                        periodo: "Anual",
                        vacuna: "Giardias",
                        enfermedad: "Giardias"
                    }, {
                        cachorro: "Canino",
                        edad: "Adulto",
                        obligatorio: "optativa",
                        periodo: "Anual",
                        vacuna: "Tos de las Perreras",
                        enfermedad: "Tos de las Perreras"
                    }
                ]
            }
        }

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

        }
    }
}
window.customElements.define("lista-calendario", listaCalendario);