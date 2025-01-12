
// i need to fetch the data from DB and then render according to that 


// importing remove elemnts from cart function 

import { removeElements } from "../logic_For_Remove_Items_From_Cart/removeElementsFromCart.js";


// function which will control inc and dec of product and will change the DB accordingly

import inc_dec_cartPage_DB_changes from "../inc_dec_products_from_Cart_update_in_DB/inc_dec_mainFile.js";


export const loadProducts = () =>{

    const presentData =  localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    // console.log("present data is",presentData);

    if(presentData.length != 0)
    {
        // reference of normal element 
        const parentContainer = document.querySelector(".parentOfItemsContainer");

        // reference of template element 

        const templateReference = document.querySelector("#cartPageTemplateElement");

        presentData.forEach( (iter) =>{

            const cloneTemplateElement = templateReference.content.cloneNode(true);

            cloneTemplateElement.querySelector(".actualCardContainer").id = `productCard${iter.productId}`;

            cloneTemplateElement.querySelector(".typeOfProduct").innerText = iter.productCategory; 

            cloneTemplateElement.querySelector(".productName").innerText = iter.productName;

            cloneTemplateElement.querySelector(".productPrice").innerText = `₹ ${iter.totalPrice}`;

            cloneTemplateElement.querySelector(".quantityDisplaySection").innerText = iter.totalItems;

            cloneTemplateElement.querySelector(".imageOfProduct").querySelector("img").src = iter.productImage;


            
            cloneTemplateElement.querySelector(".removeBtn").addEventListener( "click" , ()=>{
                removeElements(iter.productId);
            });

            
            cloneTemplateElement.querySelector(".inc_dec_Parent").addEventListener("click" , (e) =>{
                
                const referenceOfEachSection = document.querySelector(`#productCard${iter.productId}`);
                const eventTriggeredByWhom = e;
            
                const cardSectionId = iter.productId;

                inc_dec_cartPage_DB_changes(referenceOfEachSection , eventTriggeredByWhom , cardSectionId);
            })

            parentContainer.append(cloneTemplateElement);


        }); 
    }
    else{

        const normalElementRef = document.querySelector(".parentOfItemsContainer");

        const emptyCartTemplateRef = document.querySelector("#emptyCart");

        const clonedTemplateNode = emptyCartTemplateRef.content.cloneNode(true);

        const paraDIv = document.createElement("p");
        paraDIv.innerText = "Cart is Empty! Please add Products";

        const parentDivRef = clonedTemplateNode.querySelector(".emptyCart_git_Holder");

        parentDivRef.append(paraDIv);

        normalElementRef.append(parentDivRef);
    }
}