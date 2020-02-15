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

    newItem
} from "../../redux/actions/hc"
import {
    appHC
} from "../formularios/hc"
import {
    selectMenu
} from "../../redux/actions/ui";
import {
    comboMascota
} from "../combos/mascotas"
import {

    newItem as newAgenda
} from "../../redux/actions/agenda"


const HC = "hc.timeStamp"
const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"
const CURRENT_MASCOTA = "mascotas.currentTimeStamp"

export class listaHC extends connect(store, HC, OPCION_SELECCIONADA, CURRENT_MASCOTA)(LitElement) {
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
            grid-template-columns:2fr 1fr;
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
            grid-template-columns:1fr  auto;
            background-color:rgba(0,0,0,.5);
            min-height:4rem;
            padding:.3rem;
            color:white;
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
           color:var(--color-destacado);
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
            
            background-color:rgba(0,0,0,.5);
            height:3rem;
            
        }
        
        
        #botonera{
            display:grid;
            grid-auto-flow:row;
            
          
   
        }


        
        `
    }
    render() {
        return html `
        <div id="titulo">
            <div style="font-weight:bold;display:grid;grid-template-columns:1fr auto;grid-gap:1rem;align-items:center;">
                <div>HISTORIA CLINICA DE</div>
                <combo-mascota></combo-mascota>
            </div>       
            <div class="boton" @click="${this.cerrar}">${CANCELAR}</div>
        </div>
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-hc></app-hc>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">${LISTA_ADD} NUEVO ESTUDIO</div>
        </div>
            
        `
    }

    getRow() {
        if (this.items.length > 0) {
            return this.items.map(item => html `
                <div class="row" .item=${item} @click="${this.seleccionar}">
                   
                    <div class="datos">
                        <div class="nombre">${item.descripcion}</div>
                        <div class="otros">
                            <div>${new Date(item.fecha).toDateString()}</div>
                            <div>${item.realizado=="S"?"Realizado":"Sin realizar"}</div>
                        </div>
                        
                    </div>                  
                    

                    <div class="boton">${CANCELAR}</div>
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

    verVacunas(e) {
        store.dispatch(setCurrentMascota(e.currentTarget.item.id))
        store.dispatch(newAgenda())
        store.dispatch(selectMenu("AGENDA VACUNACION"))
    }

    stateChanged(state, name) {
        if (name == OPCION_SELECCIONADA) {
            this.oculto = state.ui.opcionSeleccionada.option != "HISTORIA CLINICA"
            if (!this.oculto) {
                this.items = state.hc.entities.filter(item => item.idMascota == state.mascotas.currentId)
            }
        }
        if (name == HC) {
            this.items = state.hc.entities.filter(item => item.idMascota == state.mascotas.currentId)

        }
        if (name == CURRENT_MASCOTA) {
            this.items = state.hc.entities.filter(item => item.idMascota == state.mascotas.currentId)

        }
        this.update()
    }

    agregar(e) {
        store.dispatch(newItem())
    }
    seleccionar(e) {

        store.dispatch(select(e.currentTarget.item))

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
window.customElements.define("lista-hc", listaHC);