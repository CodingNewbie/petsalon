let salon = {
    pets: []
}

function Pet(n, a, g) {
    this.name = n;
    this.age = a;
    this.gender = g;
}

function getE(id) {
    return document.getElementById(id);
}

let registeredPets = document.getElementById('registered-pets');

function displayPetCount() {
    let numOfPets = salon.pets.length;
    registeredPets.innerHTML = `Number of registered pets: ${numOfPets}`;
}

function displayPetNames() {
    let names = `<br>Pet names:<br>`;
    salon.pets.forEach(pet => names += `<p>${pet.name}</p>`);
    registeredPets.innerHTML += names;
}

function displayFooterInfo() {
    let info = document.getElementById("info");
    info.innerHTML = `<p> Welcome to ${salon.name}! We are located at ${salon.address.street} ${salon.address.number}</p>`
}
  
function init() {
    let pet1 = new Pet("Khor", 5, "Male");
    let pet2 = new Pet("Lilo", 12, "Female");
    let pet3 = new Pet("Meeko", 10, "Female");
    salon.pets.push(pet1, pet2, pet3);

    displayPetNames();
    displayFooterInfo();
}

window.onload = init;