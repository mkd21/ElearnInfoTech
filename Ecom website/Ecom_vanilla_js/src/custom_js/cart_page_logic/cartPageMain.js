

import { productsPresentInCart } from "./cartLogoNumberDisplay.js";

import {loadProducts} from "./loading_products_based_on_DB_and_rendering_using_template_elements/renderingProductsUsingTemplate.js";

import {sumUpTotalInitialtorFunction} from "../cart_page_logic/totalProductsSection/totalProduct.js";


document.addEventListener("DOMContentLoaded" , () =>{

    // number of products present in the cart method 
    productsPresentInCart();

    loadProducts();

    sumUpTotalInitialtorFunction();
    
})