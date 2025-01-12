

import {parentOfAllActivity} from "./workingWith_template";

import {reset} from "./resetDb.js";
import { updateCart } from "./updateCart.js";

document.addEventListener("DOMContentLoaded" , () =>{
    
    parentOfAllActivity();
    
    updateCart();
    
    const resetButton = document.querySelector(".btn-outline-danger");
    
    resetButton.addEventListener("click" , ()=>{
        reset();
    }); 
})