import {
    css
} from "lit-element"

export const select = css `
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border:none;
    border-bottom: 1px solid rgb(90, 88, 86);
    background-color:rgb(0,0,0,.3);
    background-image: none;
    font-size:1rem
  }
  
  select::-ms-expand {
    display: none;
  }
 
  .select {
    position: relative;
    display: flex;
    line-height: 3;
    overflow: hidden;
    border-radius: 4px;
  }
  select {
    padding-top:1rem;
    padding-left:.5rem;
    color: #fff;
    cursor: pointer;
  }
  option{
      color:gray;
      background-color:white;
      padding:.2rem
  }
  select:focus {
    border-bottom: 2px solid  var(--color-destacado);
  }
  
  .select::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: rgba(0, 0, 0, 0.5);;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
    color:white
  }
  
  .select:hover::after {
    color: var(--color-destacado);
  }
  .select label{
      position:absolute;
      top:-.6rem;
      left:.4rem;
      color:var(--color-destacado);
      font-size:.8rem

  }
  `