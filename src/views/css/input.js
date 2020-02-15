import {
    css
} from "lit-element"

export const input = css `
input{
            color:white;
            border:none;
            background-color:rgb(0,0,0,5);
            outline:none;
            padding:.5rem;
            border-radius:2px;
            
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance:textfield;
        }

        ::-webkit-input-placeholder { /* Edge */
            color: rgba(255,255,255,.6)
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: rgba(255,255,255,.6);
        }

        ::placeholder {
            color: rgba(255,255,255,.6);
        }`