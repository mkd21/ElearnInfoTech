

import {parentOfAllActivity} from "./workingWith_template";

import { updateCart } from "./updateCart.js";

import {dynamicFooter} from "./commonFooter/footer.js";


document.addEventListener("DOMContentLoaded" , () =>{
    
    parentOfAllActivity();
    dynamicFooter();
    updateCart();
})