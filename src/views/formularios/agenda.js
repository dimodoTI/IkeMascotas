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
    LEFT,
    ACEPTAR,
    NARANJA
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
            background-color:white;
            grid-template-rows:auto auto auto 1fr auto;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
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
        :host(:not([media-size="small"])) #status{
            display:none
        }
       
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:white;
            grid-gap:0;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }

        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
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
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        #botonera{
            display:grid;
            
        }
       
        nano-input ,select{
            color:black;
            background-color:white;
            border-radius:0
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
                <div class="" @click="${this.cerrar}" id="cerrar">${LEFT}</div>
            </div>       
            <div id="titulo">
                <div>Vacunas</div>
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
                <div>${this.agregando?"Agregar":"Guardar"}</div>
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
        //funciona solo para media samll
        this.shadowRoot.host.offsetParent.editando = false
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

        this.cerrar()
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
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'

            },
            editando: {
                type: Boolean,
                reflect: true
            },

        }
    }
}
window.customElements.define("app-agenda", appAgenda);