let salon = {
    name: "The fashion pet", // name is a key | 
    phone: "916-214-0050",
    address: {
        street: "Palm",
        number: "262-K",
        zip: "12345"
    },
    pets: []
};

let pet1 = {
    name: "Scooby",
    age: 15
}
let pet2 = {
    name: "Khor",
    age: 5
}

salon.pets.push(pet1, pet2);

console.log(salon.pets[0].name);

function displayFooterInfo(){

    document.write(`<p>The Salon name is: ${salon.name}</p>`);
}

// Ensure the DOM is fully loaded before executing displayFooterInfo()
document.addEventListener('DOMContentLoaded', displayFooterInfo);