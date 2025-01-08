

import { loadProducts } from "../loading_products_based_on_DB_and_rendering_using_template_elements/renderingProductsUsingTemplate";

import {productsPresentInCart} from "../cartLogoNumberDisplay.js";


export const removeElements = (productId) =>{

    console.log("product id is",productId);

    // in this function we will just access the DB and remove the targeted product 

    const productsInDB = JSON.parse(localStorage.getItem("products"));

    const filteredDB = productsInDB.filter( (iter) =>{
        if(productId != iter.productId)
            return iter;
    }); 

    console.log("filtered data is",filteredDB);

    localStorage.setItem("products" , JSON.stringify(filteredDB));

    const parent = document.querySelector(".parentOfItemsContainer");

    parent.innerHTML = "";

    loadProducts();
    productsPresentInCart();
}