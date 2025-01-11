
import {loadProducts} from "../loading_products_based_on_DB_and_rendering_using_template_elements/renderingProductsUsingTemplate.js";

import {productsPresentInCart} from "../cartLogoNumberDisplay.js";

import {sumUpTotalInitialtorFunction} from "../totalProductsSection/totalProduct.js";


function inc_dec_cartPage_DB_changes(targetCard , eventData , sectionId)
{

    if(eventData.target.innerText != "+" && eventData.target.innerText != "-")
    {
        return;
    }

    const dataInDB = JSON.parse(localStorage.getItem("products"));
    
    console.log( "data before processing",dataInDB);

    const numberOfItemsToBuy_displaySection = targetCard.querySelector(".quantityDisplaySection");
    console.log(numberOfItemsToBuy_displaySection);


    if(eventData.target.innerText == "+")
    {
        dataInDB.forEach( (iter) =>{

            if(sectionId == iter.productId)
            {
                if(iter.totalItems == iter.stockAvailable) return;
                else
                {
                    iter.totalItems = Number(iter.totalItems) + 1;
                    iter.totalPrice = Math.floor( ( Number(iter.totalPrice) + Number(iter.priceOfSingleProduct) ) * 100) / 100;

                    numberOfItemsToBuy_displaySection.innerText = iter.totalItems;
                }
            }
        });
    }
    else 
    {
        dataInDB.forEach( (iter) =>{

            if(Number(iter.totalItems) == 1) return;

            else 
            {
                if(sectionId == iter.productId)
                {
                    iter.totalItems = Number(iter.totalItems) - 1;
                    iter.totalPrice = Math.floor( (Number(iter.totalPrice) - Number(iter.priceOfSingleProduct)) * 100) / 100;

                    numberOfItemsToBuy_displaySection.innerText = iter.totalItems;
                }
            }
        });
    }

    localStorage.setItem("products" , JSON.stringify(dataInDB));

    const parentOfCartProducts = document.querySelector(".parentOfItemsContainer");
    parentOfCartProducts.innerHTML = "";

    loadProducts();
    productsPresentInCart();
    sumUpTotalInitialtorFunction();

    console.log("data ofter processing" , dataInDB);
}

export default inc_dec_cartPage_DB_changes;