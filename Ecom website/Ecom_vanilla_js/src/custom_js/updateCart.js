
export const updateCart = () =>{


    let addedItems = JSON.parse( localStorage.getItem("products")).length;

    console.log(addedItems);
    
    const numberCountArea = document.querySelector(".numberCount");
    numberCountArea.innerText = addedItems;
    
    console.log(numberCountArea);
}