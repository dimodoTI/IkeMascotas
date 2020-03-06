import {
   css
} from "lit-element"

export const boton = css `
         
        .boton:hover {
     
           fill:var(--color-destacado);
           stroke:var(--color-destacado);
           
        }
        .boton {
           display:grid;
           grid-auto-flow:column;
           align-items:center;
           grid-gap:.3rem;
           cursor:pointer;
           color:white;
           fill:white;
           stroke:white;
           background-color:var(--orange);
           border-radius:2rem;
           padding:.5rem;
           box-shadow: 0 3px 6px 0 var(--orange-5);

        }
`