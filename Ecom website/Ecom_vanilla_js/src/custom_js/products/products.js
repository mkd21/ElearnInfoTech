
import { parentOfAllActivity } from "../workingWith_template";

import { updateCart } from "../updateCart";

import { dynamicFooter } from "../commonFooter/footer";

document.addEventListener("DOMContentLoaded" , () =>{

    parentOfAllActivity();
    updateCart();
    dynamicFooter();
})