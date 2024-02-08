function displayPetCards() {
    document.getElementById("pets").innerHTML = "";
    let card = "";

    for (let i=0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        card = `
            <div>
                <p>Name: ${pet.name}</p>
                <p>Name: ${pet.age}</p>
                <p>Name: ${pet.gender}</p>
            </div>
        `;
        console.log(card);
    }
    document.getElementById("pets").innerHTML = card;
}