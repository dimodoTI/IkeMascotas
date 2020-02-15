import {
    css
} from "lit-element"

export const formOpen = css `
    @keyframes formOpen {
        0%{
            z-index:1000;
            align-items:start;
            height:3rem;
        }
        40%{top:2rem;
            left:1rem;
            z-index:1000;
            align-items:start;
            width:98%;
            height:3rem;
        } 
        100%{
            top:2rem;
            left:1rem;
            width:98%;
            height:90%;
            box-shadow:0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
            z-index:1000;
            align-items:start;
        }
    }
    .formOpen{
            animation-name: formOpen;
    }
    `

export const formClose = css `
    @keyframes formClose {
        0%{ 
            top:2rem;
            left:1rem;
            width:98%;
            height:90%;
            box-shadow:0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
            position:absolute;
            z-index:1000;
        }
        40%{
            top:2rem;
            left:1rem;
            width:98%;
            height:3rem;
            position:absolute;
            z-index:1000;
        }
        50%{
            top:2rem;
            left:1rem;
            width:98%;
            height:3rem;
            position:absolute;
            z-index:1000;
        }
        90%{
            position:absolute;
            z-index:1000;
        }
        100%{
            z-index:auto;
            box-shadow:none;
            align-items:center;
            position:static
        }
    }
    .formClose{
            animation-name: formClose;
    }
    
    `