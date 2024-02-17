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

function Pet(type, gender, name, breed, age, weight) {
    this.type = type;
    this.gender = gender;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.id = petID++;
}

const validationErrorMsg = $("#validationErrorMsg");
const petTableBody = document.querySelector("#petTableBody");
const btnRegister = document.querySelector("#btnRegister");
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
        let row = petTableBody.insertRow();
        row.setAttribute('id', 'pet-${pet.id}');
    

        row.innerHTML = `
                <td>${pet.type}</td>
                <td>${pet.gender}</td>
                <td>${pet.name}</td>
                <td>${pet.breed}</td>
                <td>${pet.age}</td>
                <td>${pet.weight}</td>
                <td><button class="delete-btn" data-id="${pet.id}">Delete</button></td>
        `;
    }
}

function isValid() {
    let fields = $(".registration-form input, .registration-form select");
    let isValid = true;
    
    fields.each(function() {
        let placeholderValue = $(this).attr("placeholder");

        if ($(this).is("input[type='checkbox'], input[type='radio']")) {
            if (!$(this).is(":checked")) {
                $(this).addClass("invalid-checkbox");
                validationErrorMsg.show();
                isValid = false;
            }
        } else {
            if ($(this).val() == "" && placeholderValue != "Promo code (optional)") {
                $(this).addClass("invalid");
                validationErrorMsg.show(); 
                isValid = false; 
            }
        }
    })
    return isValid;
}

function register() {
    let newPet = new Pet(petType.value, petGender.value, petName.value, petBreed.value, petAge.value, petWeight.value);
    
    if (isValid()) {
        $("#petTable").show();
        validationErrorMsg.hide();
        salon.pets.push(newPet);
        displayPets();
        clearForm();
    }
}

function clearForm() {
    const formFields = document.querySelectorAll('.registration-form input, .registration-form select');
    formFields.forEach(field => {
        field.value = "";
    });
}

$(document).ready(function() {
    $("#validationErrorMsg").hide();
    $("#petTable").hide();
});

document.addEventListener("input", function(event) {
    $(event.target).removeClass("invalid");
});

document.addEventListener("change", function(event) {
    if (event.target.type == "checkbox") {
        $(event.target).removeClass("invalid-checkbox");
    }
});

petTableBody.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        var row = event.target.closest('tr');
        var petId = row.id.replace('pet-', '');
        
        salon.pets = salon.pets.filter(function(pet) {
            return pet.id.toString() !== petId;
        });
        row.remove();
    }
});

btnRegister.addEventListener("click", register);