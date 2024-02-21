var services=[];
//similar to window.onload
$(document).ready(function(){
    console.log("Services page");

    //add the hook events
    $("#btnService").click(addService);

    //loading data
    displayItems(services);
});

function Service(description,price){
    this.description=description;
    this.price=price;
}


function addService(){
    let inputService = $("#petService").val(); //similar to value
    let inputPrice = $("#petPrice").val();
    let newService = new Service(inputService,inputPrice);
    console.log(inputService);
    console.log(inputPrice);
    services.push(newService);
    saveItem(newService); //from the LS
    displayItems(services);
}

function displayItems(items){
    let htmlList=$("#services");
    htmlList.html("");
    let li;
    for(let i=0; i<items.length; i++){
        let item=items [i];
        li=`<li>${item.description} - $${item.price}</li>`;
        htmlList.append(li);
    }
}

function saveItem(item){
    let itemsArray = readItems(); //getting the LS data
    itemsArray.push(item);//add the new item to the array
    let val = JSON.stringify(itemsArray);
    localStorage.setItem("services", val);
}

function readItems(){
    // getting items from Local Storage
    let data=localStorage.getItem("services");
    if(!data){ //NOT data?
        return []; //create the array
    }else{
        //if we have data
        let list = JSON.parse(data);// parse the data back
        return list;
    }
}