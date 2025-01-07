
export const updateCart = () =>{


    let addedItems = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")).length : 0;

    console.log(addedItems);
    
    const numberCountArea = document.querySelector(".numberCount");
    numberCountArea.innerText = addedItems;
    
    console.log(numberCountArea);
}