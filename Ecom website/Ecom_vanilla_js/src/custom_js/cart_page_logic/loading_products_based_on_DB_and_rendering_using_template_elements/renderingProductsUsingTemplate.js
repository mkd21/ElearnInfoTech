
// i need to fetch the data from DB and then render according to that 

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

            console.log(iter);

            const cloneTemplateElement = templateReference.content.cloneNode(true);


            cloneTemplateElement.querySelector(".typeOfProduct").innerText = iter.productCategory; 

            cloneTemplateElement.querySelector(".productName").innerText = iter.productName;

            cloneTemplateElement.querySelector(".productPrice").innerText = iter.totalPrice;

            cloneTemplateElement.querySelector(".quantityDisplaySection").innerText = iter.totalItems;

            cloneTemplateElement.querySelector(".imageOfProduct").querySelector("img").src = iter.productImage;

            parentContainer.append(cloneTemplateElement);

        }); 
    }
    else{
        console.log("please select products to buy");
    }
}