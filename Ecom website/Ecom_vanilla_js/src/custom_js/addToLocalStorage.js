
export const addToLocalStorage = (productDetails) =>{

    let availableData = localStorage.getItem("products");

    availableData = availableData ? JSON.parse(availableData) : [];

    // before adding to the local DB we need to check if product is already present or Not. 
    // if present then just go to that product and update the quantity and price
    // if not prsent then only add the new whole product object


    const existingProduct = availableData.find( (iter) => iter.productId == productDetails.productId );

    if(existingProduct)
    {
        if(Number(productDetails.totalItems) + Number(existingProduct.totalItems) <= productDetails.stockAvailable)
        {
            existingProduct.totalItems = Number(productDetails.totalItems) + Number(existingProduct.totalItems);
            existingProduct.totalPrice = Math.round( (existingProduct.totalPrice + productDetails.totalPrice) * 100) / 100;
        }
    }
    else{
        availableData.push(productDetails);
    }
    
    localStorage.setItem("products" , JSON.stringify(availableData));
}