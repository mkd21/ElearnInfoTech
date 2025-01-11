
import {addToLocalStorage} from "./addToLocalStorage.js";

import { updateCart } from "./updateCart.js";

const addToCart  = (id) =>{
   
    const targetCard = document.querySelector(`#card${id}`);
   
    // reference of increment and decrement parent 
    const incrementDecrementParent = targetCard.querySelector(".productIncrementDecrementFunctionality");

    // reference of p tag inside the increment and decrement section 
    const quantityTobeAdded_display_section = incrementDecrementParent.querySelector("p");


    // price of one product 
    const priceOfOneItem_currencySign_included = targetCard.querySelector(".currentPrice").textContent;

    // filtered price ie removed the rupee sign 
    const onlyNumeric_value = priceOfOneItem_currencySign_included.replace("₹", "");

    // image of producct 
    const productImage = targetCard.querySelector(".productImage").querySelector("img").src;


    // category of product 

    const productCategory = targetCard.querySelector(".itemType").innerText;
    console.log(productCategory);


    // name of product 

    const productName = targetCard.querySelector(".productName").innerText;


    // total stock 

    const totalStockAvailable = targetCard.querySelector(".totalStock").innerText;
    const usefulData = totalStockAvailable.replace("Total Stocks Available: " , "");

    // price of single product 

    const singlProdPrice = targetCard.querySelector(".currentPrice").innerText.replace("₹ " , "");
    // console.log(singlProdPrice);

    const total = {
        productId : id,
        priceOfSingleProduct : singlProdPrice ,
        totalItems : quantityTobeAdded_display_section.innerText,
        totalPrice : Math.round((onlyNumeric_value * quantityTobeAdded_display_section.innerText) * 100) / 100,
        productImage : productImage,
        productCategory : productCategory,
        productName : productName,
        stockAvailable : usefulData,
    };


    // now the object will be added to the local storage 
    addToLocalStorage(total);

    // now updating the cart value 
    updateCart();

}

export default addToCart;