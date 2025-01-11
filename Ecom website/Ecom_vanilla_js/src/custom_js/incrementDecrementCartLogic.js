
function changeInValues(buttonReference , quantityIndicatorArea , stocksAvailable , presentValueDisplayed , cardId)
{

    const symbolOfButton = buttonReference.textContent;
    if(symbolOfButton != "+" && symbolOfButton != "-") return; 
    

    const valuesInNumberDatatype = Number(presentValueDisplayed);
    if(symbolOfButton == "+" && valuesInNumberDatatype < stocksAvailable)
    {
        quantityIndicatorArea.textContent = valuesInNumberDatatype + 1;
    }
    else if(symbolOfButton == "-" && valuesInNumberDatatype > 1)
    {
        quantityIndicatorArea.textContent = valuesInNumberDatatype - 1;
    }
}

export default function incrementDecrementLogic(e , availabilityOf_Stocks , id)
{

    const parentOfIncrementDecrementSection = document.querySelector(`#card${id}`);
    const quantityIndicatorArea = parentOfIncrementDecrementSection.querySelector("p");
    

    // inspecting which button triggered the event and performing increment or decrement action according to that 
    const Buttontarget = e.target;
    const actualPresentValueShown = quantityIndicatorArea.innerText;

    const cardId = id;

    // this function will preform all the increment and decrement operations 
    changeInValues(Buttontarget , quantityIndicatorArea , availabilityOf_Stocks , actualPresentValueShown , cardId);
}