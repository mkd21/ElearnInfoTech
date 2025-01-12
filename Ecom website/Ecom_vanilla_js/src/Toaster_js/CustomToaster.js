
function createToast(idOfTargetCard, toastparentReference , productName) {

    if(productName == null)
    {
        console.log("inside the if block");

        toastparentReference.innerText = `Product with Id ${idOfTargetCard} removed from Cart`;
        toastparentReference.classList.add("toaster-container-visible");
        setTimeout( ()=>{
            toastparentReference.classList.remove("toaster-container-visible");
            toastparentReference.classList.add("toaster-container-invisible");
        } , 1000);

        setTimeout(() =>{
            toastparentReference.classList.remove("toaster-container-invisible");
        },1100);
    }
    else
    {
        toastparentReference.innerText = `${productName} with Id ${idOfTargetCard} added to cart`;

        toastparentReference.classList.add("toaster-container-visible");

        setTimeout( ()=>{
            toastparentReference.classList.remove("toaster-container-visible");
            toastparentReference.classList.add("toaster-container-invisible");
        } , 1000);

        setTimeout(() =>{
            toastparentReference.classList.remove("toaster-container-invisible");
        },1100);
    }
}

export default createToast;