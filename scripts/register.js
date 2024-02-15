let petID = 0;

let salon = {
    name: "Paws & Relax",
    phone: "916-214-0050",
    address: {
        street: "Broadstone Pwky",
        number: "1550",
        zip: "95630"
    },
    pets: []
}

function Pet(type, gender, name, breed, age, weight, service) {
    this.type = type;
    this.gender = gender;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.service = service;
    this.id = petID++;
}

const petTableBody = document.querySelector("#petTableBody");
const petType = document.querySelector("#petType");
const petGender = document.querySelector("#petGender");
const petName = document.querySelector("#petName");
const petBreed = document.querySelector("#petBreed");
const petAge = document.querySelector("#petAge");
const petWeight = document.querySelector("#petWeight");
const petService = document.querySelector("#petService");

const pet1 = new Pet("Dog", "Male", "Khor", "Husky", 7, "65", "Grooming");
const pet2 = new Pet("Dog", "Female", "Lilo", "Chow Chow", 12, "60", "Grooming");
const pet3 = new Pet("Dog", "Female", "Meeko", "Pomeranian", 11, "10", "Grooming");
salon.pets.push(pet1, pet2, pet3);

function displayPets() {
    petTableBody.innerHTML = "";

    for(i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
    

        petTableBody.innerHTML += `
            <tr id="${pet.id}">
                <td>${pet.type}</td>
                <td>${pet.gender}</td>
                <td>${pet.name}</td>
                <td>${pet.breed}</td>
                <td>${pet.age}</td>
                <td>${pet.weight}</td>
                <td>${pet.service}</td>
            </tr>
        `;
    }
}

function register() {
    let newPet = new Pet(petType.value, petGender.value, petName.value, petBreed.value, petAge.value, petWeight.value, petService.value);
    salon.pets.push(newPet);
    displayPets();
    clearForm();
}

function clearForm() {
    const formFields = document.querySelectorAll('.registration-form input, .registration-form select');
    formFields.forEach(field => {
        field.value = "";
    });
}

