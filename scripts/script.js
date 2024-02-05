let salon = {
    pets: [
        {
            name: "Khor",
            age: 5,
            gender: "Male",
            service: false,
            breed: "Husky"
        },
        {
            name: "Lilo",
            age: 12,
            gender: "Female",
            service: false,
            breed: "Chow chow"
        },
        {
            name: "Meeko",
            age: 10,
            gender: "Female",
            service: true,
            breed: "Pomeranian"
        }
    ]
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

displayPetCount();
displayPetNames();