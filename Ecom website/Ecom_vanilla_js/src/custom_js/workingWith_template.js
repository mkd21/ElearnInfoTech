
const data = import("../api/data.json");

export const parentOfAllActivity = () =>{

    data.then( (receivedData) =>{

        try 
        {
            const parentOfProduct = document.querySelector("#whyChooseUs");
            const templeteReference = document.querySelector("#productCard-template");

            const filteredData = receivedData.default;

            // making clone of template element inside the loop

            filteredData.forEach( (iter) =>{

                const {id , name , category , brand , price , previousPrice , stock , description , image} = iter;
                
                const clonedTemplate = templeteReference.content.cloneNode(true);

                clonedTemplate.querySelector(".itemType").innerText = category;
                clonedTemplate.querySelector(".productName").innerText = name;

                parentOfProduct.append(clonedTemplate);
            })
        }
        catch(err)
        {
            console.log("something wrong with the api",err);
        }
        
    })
}
