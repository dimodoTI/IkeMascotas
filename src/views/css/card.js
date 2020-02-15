import {
    css
} from "lit-element"

export const card = css `
:host{
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    border: 0;
    border-radius: 6px;
    background-color:rgb(0,0,0,.5);
    scrollbar-width: thin;
    scrollbar-color: #999 transparent;
    box-sizing: border-box;
}

:host::-webkit-scrollbar-track
{
    border-radius: .3rem;
    background-color: transparent;
}
:host::-webkit-scrollbar
{
    width:.4rem;
}
:host::-webkit-scrollbar-thumb
{
    border-radius: .3rem;
    background-color: #999
}

`