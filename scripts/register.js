let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    const tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";  
    }

    tabs[n].style.display = "block";
}

  function nextPrev(n) {
    const tabs = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    tabs[currentTab].style.display = "none";
    currentTab += n;
    showTab(currentTab);
  }

function validateForm() {
  const formInputs = document.querySelector('.registration-form').getElementsByTagName('input');
  const isCheckboxChecked = document.getElementById('tos-checkbox').checked;
  let isValid = true;

  for (const input of formInputs) {
    if (['checkbox', 'submit', 'button'].includes(input.type) || input.placeholder === 'Promo code (optional)') {
      continue;
    }

    if (input.value === "") {
      input.classList.add('invalid');
      isValid = false;
    } else {
      input.classList.remove('invalid');
    }
  }

  if (!isCheckboxChecked) {
    isValid = false;
  }

  return isValid;
}