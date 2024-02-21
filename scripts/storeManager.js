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