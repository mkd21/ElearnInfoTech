
const data = import("../api/data.json");

import incrementDecrementLogic from "./incrementDecrementCartLogic.js";
import addToCart from "./addToCartFunctionality.js";

export const parentOfAllActivity = () =>{

    data.then( (receivedData) =>{

        try 
        {
            const parentOfProduct = document.querySelector("#whyChooseUs");
            const templeteReference = document.querySelector("#productCard-template");

            const usefulData = receivedData.default;

            // making clone of template element inside the loop

            usefulData.forEach( (iter) =>{

                const {id , name , category , brand , price , previousPrice , stock , description , image} = iter;

                const clonedTemplate = templeteReference.content.cloneNode(true);

                clonedTemplate.querySelector(".cardParent").id = `card${id}`;      // giving unique id to each card 
                
                clonedTemplate.querySelector(".itemType").textContent = category;
                clonedTemplate.querySelector(".actual_img_container").src = image;
                clonedTemplate.querySelector(".productName").textContent = name;
                clonedTemplate.querySelector(".prod-description").textContent = description;
                clonedTemplate.querySelector(".currentPrice").innerHTML = `&#8377; ${price}`;
                clonedTemplate.querySelector(".previousPrice").innerHTML = `&#8377; ${previousPrice}`;
                clonedTemplate.querySelector(".totalStock").textContent = `Total Stocks Available: ${stock}`;

                
                clonedTemplate.querySelector(".productIncrementDecrementFunctionality").addEventListener("click" , (e) => {
                    incrementDecrementLogic(e , stock , id);
                });


                clonedTemplate.querySelector(".addToCardButton").addEventListener( "click" , (e) =>{

                    // calling the addTocart logic function 
                    addToCart(id);
                }); 
                
                
                // appending the clonedTemplate to the normal html element 
                parentOfProduct.append(clonedTemplate);
                
            })
        }
        catch(err)
        {
            console.log("something wrong with the api",err);
        }
        
    })
}
