

export const sumUpTotalInitialtorFunction = () =>{

    const dataPresent = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    // console.log(dataPresent);

    // reference for subTotal 
    const moneyDisplaySectionParent = document.querySelector(".subtotalSection");
    const moneyDisplaySection = moneyDisplaySectionParent.querySelectorAll("h5")[1];

    // console.log(moneyDisplaySection);


    // reference for final price 

    const finalProductCalculator = (subTotalPrice) =>{

        // reference of tax section 
        const parent_taxSection = document.querySelector(".taxAndOtherChargesSection");
        const taxDisplaySection = parent_taxSection.querySelectorAll("h5")[1].innerText.replace("₹" , "");

        // reference of final price section 
        const finalPriceSectionParent = document.querySelector(".finalAmountSection");
        const finalPriceDisplaySection = finalPriceSectionParent.querySelectorAll("h5")[1];

        // const filteredValue = finalPriceDisplaySection.replace("")
        // console.log(finalPriceDisplaySection);

        finalPriceDisplaySection.innerText = `₹ ${ Math.floor( (subTotalPrice + Number(taxDisplaySection)) * 1000 ) / 1000}`;
    } 

    const subTotalCalculator = () =>{

        let initialValue = 0;

        dataPresent.forEach( (iter) =>{

            initialValue = Math.round( (Number(initialValue) + iter.totalPrice) * 1000 ) / 1000;
        });

        moneyDisplaySection.innerText = `₹ ${initialValue}`;

        finalProductCalculator(initialValue);
    }

    subTotalCalculator();

}