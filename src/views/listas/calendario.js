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
    selectMenu
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
            grid-auto-flow:rows;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            transition: all .5s ease-in-out;
            padding-bottom:1rem;
            width:70%;
            height:70%
           
       
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: 1fr auto;
            justify-items:center;
            grid-gap:.5rem;
            color:white;
            stroke:white;
            fill:white;
            align-items:center;
            margin:.5rem
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
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            background-color:rgba(0,0,0,.5);
            min-height:4rem;
            padding:.3rem;
            color:white;
            align-items:center;
        
           
        }

        .cabeceraRow{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            background-color:rgba(0,0,0,.6);
           
            padding:.3rem;
            color:var(--primary-color);
            align-items:center;
           
           
        }
        

        
        `
    }
    render() {
        return html `
        <div id="titulo">
            <div style="font-weight:bold">CALENDARIO DE VACUNACION</div>
            <div class="boton" @click="${this.cerrar}">${CANCELAR}</div>
        </div>
        <div id="cuerpo">
            <div class="cabeceraRow">
             
                        <div class="cachorro">Cachorro</div>
                        <div class="edad">Edad</div>
                        
                        <div class="obligatorio">Obligatoriedad</div>
                        <div class="periodo">Perido</div>

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
        store.dispatch(selectMenu(""))
    }

    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            }

        }
    }
}
window.customElements.define("lista-calendario", listaCalendario);