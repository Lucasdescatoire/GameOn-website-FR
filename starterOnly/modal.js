
/* Responsive */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// element present in the modal at the time of the errors
const errorFirstName = document.querySelector("#error-first");
const errorLastName = document.querySelector("#error-last");
const errorEmail = document.querySelector("#error-email");
const errorBirthDate = document.querySelector("#error-birthdate");
const errorEventQuantity = document.querySelector("#error-eventquantity");
const errorEventLocation = document.querySelector("#error-eventlocation");
const errorConditionsOfUse = document.querySelector("#error-conditionsofuse");

/* DOM Elements */

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector(".form");

// element present in the modal
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const eventQuantity = document.querySelector("#quantity");
const eventLocation = document.querySelectorAll(".checkbox-input[name='location']");
const conditionsOfUse = document.querySelector("#checkbox1");

// element present for the validation message
const confirmationValidation = document.querySelector("#modal-confirm");

/* Modal Form */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event

function launchModal() { // launch modal form
    modalbg.style.display = "block";
}

closeModalBtn.addEventListener("click", closeModal); // close modal event

function closeModal() { // close modal form
  form.reset();
    modalbg.style.display = "none";
    form.style.display = "block";
    confirmationValidation.style.display = "none";
}


/* Form Validator (per field) */

function validateFirstName(firstName) { // first name validation function
  if (firstName.value.trim().toString().length < 2) {
    errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorFirstName.style.display = "inline-block";
      firstName.style.border = "solid #FE142F 2px";
      return false;
  } else {
    errorFirstName.style.display = "none";
      firstName.style.border = "none";
      return true;
  }
}

function validateLastName(lastName) { // last name validation function
  if (lastName.value.trim().toString().length < 2) {
    errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        errorLastName.style.display = "inline-block";
      lastName.style.border = "solid #FE142F 2px";
      return false;
  } else {
   
    errorLastName.style.display = "none";
      lastName.style.border = "none";
      return true;
  }
}

function validateEmail(email) { // email validation function
  if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/g.test(email.value)) {
    errorEmail.innerText = "S'il vous plait entrez un email valide .";
    errorEmail.style.display = "inline-block";
      email.style.border = "solid #FE142F 2px";
      return false;
  } else {
    errorEmail.style.display = "none";
      email.style.border = "none";
      return true;
  }
}

function validateBirthDate(birthDate) { // birth date validation function
  if (!/^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/g.test(birthDate.value)) {
      birthDate.style.border = "solid #FE142F 2px";
      errorBirthDate.innerText = "S'il vous plait entrez votre date d'anniverssaire .";
        errorBirthDate.style.display = "inline-block";
      return false;
  } else {
    errorBirthDate.style.display = "none";
      birthDate.style.border = "none";
      return true;
  }
}

function validateEventQuantity(eventQuantity) { // events quantity validation function
  if (!/\d/g.test(eventQuantity.value)) {
    errorEventQuantity.innerText = "s'il vous plaît indiquer le nombre de participation a nos tournois .";
        errorEventQuantity.style.display = "inline-block";
      eventQuantity.style.border = "solid #FE142F 2px";
      return false;
  } else {
    errorEventQuantity.style.display = "none";
      eventQuantity.style.border = "none";
      return true;
  }
}

function validateEventLocation(eventLocation) { // events location validation function
  let eventLocationChecked = 0;


  eventLocation.forEach(location => {
      if (location.checked) {
          eventLocationChecked = 1;
      }
  })

  if (eventLocationChecked === 0) {
    errorEventLocation.innerText = "Sélectionner un lieu. ";
    errorEventLocation.style.display = "inline-block";
      return false;
  } else {
    errorEventLocation.style.display = "none";
      return true;
  };
}

function validateConditionsOfUse(conditionsOfUse) { // conditions of use validation function
  if (!conditionsOfUse.checked) {
    errorConditionsOfUse.innerText = "Veuillez accepter les condition d'utilisation . ";
    errorConditionsOfUse.style.display = "inline-block";
      return false;
  } else {
    errorConditionsOfUse.style.display = "none";
      return true;
  };
}
/* Form Validator */

function validate() { // global validation function
  let isFormValidate = [];
  

  isFormValidate.push(validateFirstName(firstName));
  isFormValidate.push(validateLastName(lastName));
  isFormValidate.push(validateEmail(email));
  isFormValidate.push(validateBirthDate(birthDate));
  isFormValidate.push(validateEventQuantity(eventQuantity));
  isFormValidate.push(validateEventLocation(eventLocation));
  isFormValidate.push(validateConditionsOfUse(conditionsOfUse));

  if (!isFormValidate.includes(false)) {
    form.reset();
      form.style.display = "none"; // remove form
      confirmationValidation.style.display = "flex"; // show validation message
  }
}


/* Send Form */

form.addEventListener("submit", function (e) { // form sending
  e.preventDefault();
  validate();
});


/* Close Validation Message */

document.querySelector("#btn-closed").addEventListener("click", closeModal); // close validation message (+ reset ?)

