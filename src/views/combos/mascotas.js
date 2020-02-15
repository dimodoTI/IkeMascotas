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
    select
} from "../css/select"
import {
    setCurrent as setCurrentMascota
} from "../../redux/actions/mascotas"

import {
    newItem as newHC
} from "../../redux/actions/hc"

import {
    newItem as newAgenda
} from "../../redux/actions/agenda"




const MASCOTAS = "mascotas.timeStamp"
const CURRENT_MASCOTA = "mascotas.currentTimeStamp"


export class comboMascota extends connect(store, MASCOTAS, CURRENT_MASCOTA)(LitElement) {
    constructor() {
        super();
        this.oculto = true
        this.items = []
        this._value = 0

    }

    static get styles() {
        return css `
     
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
        
        

        
        `
    }
    render() {
        return html `
            <div class="select" style="width:15rem;height:3rem">
                <label for="tipo"></label>
                <select style="width:100%;font-size:1.2rem;padding-top:0" id="tipo" @change="${this.cambioValor}"> 
                    ${this.items.map(item=>{
                        return html `<option value="${item.id}" .selected="${item.id==this._value}" @change="${this._value=item.id}">${item.nombre}</option>`
                    })}                           
                </select>
            </div>   
            
        `
    }


    stateChanged(state, name) {
        if (name == MASCOTAS) {
            this.items = state.mascotas.entities
            if (this.items.length > 0) {
                this._value = this.items[0].id
                store.dispatch(setCurrentMascota(this._value))
            }

        }
        if (name == CURRENT_MASCOTA) {
            this._value = state.mascotas.currentId
            this.shadowRoot.querySelector("#tipo").value = this._value
        }
        this.update()
    }
    cambioValor(e) {
        this._value = parseInt(e.currentTarget.value, 10)
        store.dispatch(setCurrentMascota(this._value))
        store.dispatch(newHC())
        store.dispatch(newAgenda())
    }
    static set value(value) {
        this._value = value
        store.dispatch(setCurrentMascota(value.id))
        this.update()
    }
    static get value() {
        return this._value
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
window.customElements.define("combo-mascota", comboMascota);