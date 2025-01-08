
// i need to fetch the data from DB and then render according to that 


// importing remove elemnts from cart function 

import { removeElements } from "../logic_For_Remove_Items_From_Cart/removeElementsFromCart.js";

export const loadProducts = () =>{

    const presentData =  localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    console.log("present data is",presentData);

    if(presentData.length != 0)
    {
        // reference of normal element 
        const parentContainer = document.querySelector(".parentOfItemsContainer");

        // reference of template element 

        const templateReference = document.querySelector("#cartPageTemplateElement");

        presentData.forEach( (iter) =>{

            const cloneTemplateElement = templateReference.content.cloneNode(true);


            cloneTemplateElement.querySelector(".typeOfProduct").innerText = iter.productCategory; 

            cloneTemplateElement.querySelector(".productName").innerText = iter.productName;

            cloneTemplateElement.querySelector(".productPrice").innerText = `₹ ${iter.totalPrice}`;

            cloneTemplateElement.querySelector(".quantityDisplaySection").innerText = iter.totalItems;

            cloneTemplateElement.querySelector(".imageOfProduct").querySelector("img").src = iter.productImage;

            cloneTemplateElement.querySelector(".removeBtn").addEventListener( "click" , ()=>{
                removeElements(iter.productId);
            });


            parentContainer.append(cloneTemplateElement);

        }); 
    }
    else{

        const normalElementRef = document.querySelector(".parentOfItemsContainer");

        const emptyCartTemplateRef = document.querySelector("#emptyCart");

        const clonedTemplateNode = emptyCartTemplateRef.content.cloneNode(true);

        const paraDIv = document.createElement("p");
        paraDIv.innerText = "Cart is Empty! Please as Products";

        const parentDivRef = clonedTemplateNode.querySelector(".emptyCart_git_Holder");

        parentDivRef.append(paraDIv);

        normalElementRef.append(parentDivRef);


        // const parentOfCards = document.querySelector(".parentOfItemsContainer");
        
        // const gifHolder = document.createElement("div");

        // const imageTag = document.createElement("img");

        // imageTag.src = "../public/empty_Cart_GIF/icons8-empty-cart.gif";

        // imageTag.style.width = "10%";
        // imageTag.style.marginLeft = "45%";


        // gifHolder.append(imageTag);

        // parentOfCards.append(gifHolder);
    }
}