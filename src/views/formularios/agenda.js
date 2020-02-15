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
    select
} from "../css/select"

import {
    input
} from "../css/input"

import {
    CANCELAR,
    ACEPTAR
} from "../../../assets/icons/icons";
import {
    add as addAgenda,
    update as updateAgenda

} from "../../redux/actions/agenda"

import {
    nanoInput
} from "@brunomon/nano-input"




const AGENDA_SELECCIONADA = "agenda.selectedTimeStamp"
const OPCION_SELECCIONADA = "ui.opcionSeleccionada.timeStamp"

export class appAgenda extends connect(store, AGENDA_SELECCIONADA, OPCION_SELECCIONADA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.item = {}
        this.idMascota = 0

    }

    static get styles() {
        return css `
       
        ${card}
        ${boton}
        ${select}
       
 
        :host{
            
            display:grid;
            grid-auto-flow:rows;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            
           
       
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            min-width:20rem;
            grid-template-columns:1fr;
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
            grid-auto-flow:row;
            grid-gap:.5rem
        }
       
        #cartel{
            color:white;
            border:2px solid var(--color-destacado);
            max-width:10rem;
            padding:.3rem;
            font-size:.8rem
        }
        a {
            color:var(--color-destacado);
            font-size: .8rem
        }
        nano-input {
            color:white;
            background-color:rgb(0,0,0,.3);
            border-radius:4px
        }
        

        
        `
    }
    render() {
        return html `
            <div id="titulo">
                <div>VACUNA</div>
                
            </div>
            <div id ="cuerpo">
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="vacunas">Vacunas</label>
                    <select style="width:100%" id="vacunas" >          
                        <option value="1" .selected="${this.item.idVacuna=="1"}">Corona Virus</option>
                        <option value="2" .selected="${this.item.idVacuna=="2"}">Giardias</option>
                        <option value="3" .selected="${this.item.idVacuna=="3"}">Quintuple</option>
                        <option value="4" .selected="${this.item.idVacuna=="4"}">Rabia</option>
                        <option value="5" .selected="${this.item.idVacuna=="5"}">Sextuple</option>
                        <option value="6" .selected="${this.item.idVacuna=="6"}">Tos de las perreras</option>          
                    </select>  
                </div>       
                
                <nano-input style="width:15rem" id="fecha" type="date" label="Fecha" no-spinner .value="${this.item.fecha.substr(0,10)}"></nano-input>
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="realizado">Realizado</label>
                    <select style="width:100%" id="realizado" >          
                        <option value="S" .selected="${this.item.realizado=="S"}">SI</option>
                        <option value="N" .selected="${this.item.realizado=="N"}">NO</option>
                       
                    </select>  
                </div>           
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${ACEPTAR}</div>
                <div>${this.agregando?"AGREGAR":"GUARDAR"}</div>
            </div>   
        `
    }


    stateChanged(state, name) {

        if (name == OPCION_SELECCIONADA) this.oculto = state.ui.opcionSeleccionada.option != "AGENDA VACUNACION"
        if (name == AGENDA_SELECCIONADA) this.item = {
            ...state.agenda.selectedItem
        }
        if (!this.oculto) this.shadowRoot.querySelector("#vacunas").focus()

        this.agregando = state.agenda.currentTask == "ADD"
        this.update()
    }

    cerrar() {
        this.oculto = true
    }
    salvar() {

        const fecha = new Date(this.shadowRoot.querySelector("#fecha").value.replace(/-/g, "/"))
        this.item = {
            idVacuna: this.shadowRoot.querySelector("#vacunas").value,
            fecha: fecha.toJSON(),
            realizado: this.shadowRoot.querySelector("#realizado").value,
            idMascota: store.getState().mascotas.currentId
        }
        this.update()
        if (store.getState().agenda.currentTask == "ADD") store.dispatch(addAgenda(this.item))
        if (store.getState().agenda.currentTask == "UPDATE") store.dispatch(updateAgenda(this.item))

        this.oculto = true
    }
    static get properties() {
        return {
            oculto: {
                type: Boolean,
                reflect: true
            },
            agregando: {
                type: Boolean,
                reflect: true
            }

        }
    }
}
window.customElements.define("app-agenda", appAgenda);