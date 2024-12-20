const creating5_reasons_section = () =>{

    const parentDIV_5reasons_section = document.createElement("div");
    parentDIV_5reasons_section.style.height = "100vh";
    parentDIV_5reasons_section.style.backgroundColor = "yellow";
    parentDIV_5reasons_section.style.backgroundImage = "url('../images/backgroundImage/5reasonsImage/largeScreens.jpg')";
    parentDIV_5reasons_section.style.backgroundPosition = "center";
    parentDIV_5reasons_section.style.backgroundSize = "cover";
    parentDIV_5reasons_section.style.backgroundRepeat = "no-repeat";


    // creating the contents inside the div element 

    const h1 = document.createElement("h1");
    h1.innerText = "5 reasons to Zest";

    // styling the h1 contents 

    const styles = {
        "font-size": "clamp(2rem, 18vw, 12rem)",
        "padding-left": "4.1rem",
        "font-weight": "900",
        "color": "white"
    }

    for(const [key , val] of Object.entries(styles))
    {
        h1.style[key] = val;
    }
    

    // creating UL and LI 
    const ULDiv = document.createElement("ul");
    ULDiv.style.cssText = "width: 87%; margin-left: 3.2rem; margin-top: 3.2rem;";

    // creating 5 li's 

    const detailsArray = ["No joining fees, no hidden charges" , "Personalized credit limit of up to 2 lac" , "Accepted at 10,000 online stores and 75,000 physical retail stores" , "3-step fast approval process - no paperwork, no credit card needed" , "• 17+ million registered users, 4.4 app rating on Play Store"];

    for(let i = 0; i <detailsArray.length; i++)
    {
        const listItems = document.createElement("li");
        listItems.innerText = detailsArray[i];
        listItems.style.cssText = "font-weight : 700 !important; color : white; font-size:clamp(2rem , 2vw , 3rem) !important; border-bottom: 2px solid white; margin-bottom: 1.2rem;";
        ULDiv.append(listItems);
    }


    // creating button and styling of the same 

    const button = document.createElement("button");
    button.innerText = "Download Zest Now!";
    button.classList.add("btn" , "btn-light", "ms-5" , "mt-5", "rounded-4" , "w-25" , "fw-bold" , "tracking-widest");

    // Appending the divs and elements 

    parentDIV_5reasons_section.append(h1 , ULDiv);
    
    const buyingSectionDiv = document.querySelector(".buyingSectionParent");
    const dynamicDiv = document.querySelector(".dynamicDiv");
    
    const upperDiv = document.querySelector(".FiveReasonsSection");
    const lowerDiv = document.querySelector(".actual5reasonsSection");

    upperDiv.style.display = "none";
    lowerDiv.style.display = "none";

    dynamicDiv.append(parentDIV_5reasons_section);
    buyingSectionDiv.append(dynamicDiv);
}


const controlOnDynamicDiv = () =>{

    const targetDiv = document.getElementsByClassName("dynamicDiv");
    
    if(window.innerWidth < 1000)
    {
        targetDiv[0].style.display = "none";
        console.log("executed if block");
        
        const upperDiv = document.querySelector(".FiveReasonsSection");
        const lowerDiv = document.querySelector(".actual5reasonsSection");

        upperDiv.style.display = "block";
        lowerDiv.style.display = "block";
    }
    else 
    {
        targetDiv[0].style.display = "block";
        console.log("executed else block");
        creating5_reasons_section();
    }
}

controlOnDynamicDiv();


window.addEventListener("resize" , controlOnDynamicDiv);

/*
    
    when screen size is small than 1000 px then remove the dynamic div , upper div and lower div.

    if not then 

    make the dynamic div back to normal ie display : block

    after that call the function named creating5_reasons_section(). 

    this function created the complete div and it's content using js.

    after that append process takes place accordingly

    ---> parentDiv gets appended with h1 and ULDiv 
    
    ---> dynamicDiv gets appended by parentDiv

    ---> buyingSectionDiv gets appended by dynamic div


*/