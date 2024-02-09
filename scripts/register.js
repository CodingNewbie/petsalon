let currentTab = 0;

function showTab(n) {
    const tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"; 
      }

    tabs[n].style.display = "block";
}

function goToNextTab() {
const tabs = document.getElementsByClassName("tab");

if (!validateForm()) {
    return;
}

tabs[currentTab].style.display = "none";
currentTab++;

if (currentTab >= tabs.length) {
    document.getElementById("regForm").submit();
    return;
    }
    
showTab(currentTab);
}

function validateForm() {
    const tabs = document.getElementsByClassName("tab");
    const currentTabInputs = tabs[currentTab].getElementsByTagName('input');
    const tosCheckbox = document.getElementById('tos-checkbox');
    let isValid = true;

    for (const input of currentTabInputs) {
        if (['submit', 'button'].includes(input.type) || input.placeholder === 'Promo code (optional)') {
            continue;
        }

        if (input.type !== 'checkbox' && input.value === "") {
            input.classList.add('invalid');
            input.removeEventListener('input', handleInput);
            input.addEventListener('input', handleInput);
            isValid = false;
        }
    }

    if (!tosCheckbox.checked) {
        tosCheckbox.classList.add('invalid-checkbox');
        tosCheckbox.removeEventListener('change', handleCheckboxChange);
        tosCheckbox.addEventListener('change', handleCheckboxChange);
        isValid = false;
    } else {
        tosCheckbox.classList.remove('invalid-checkbox');
    }

    return isValid;
}

function handleInput(event) {
    event.target.classList.remove('invalid');
}

function handleCheckboxChange(event) {
    event.target.classList.remove('invalid-checkbox');
}

document.addEventListener('DOMContentLoaded', () => {
    showTab(currentTab);
    
    const addPetButton = document.getElementById('addPetButton');
    
    addPetButton.addEventListener('click', function() {
        const currentTabContainer = document.getElementsByClassName("tab")[currentTab];
        const addPetSections = currentTabContainer.querySelectorAll('.add-pet');
        const lastAddPetSection = addPetSections[addPetSections.length - 1];

        const clone = lastAddPetSection.cloneNode(true);
        clone.querySelectorAll('input').forEach(input => input.value = '');
        clone.querySelectorAll('select').forEach(select => select.selectedIndex = 0);

        clone.style.borderTop = "20px solid #FFEAE8";

        const addButton = currentTabContainer.querySelector('#addPetButton');
        currentTabContainer.insertBefore(clone, addButton);
    });
});
