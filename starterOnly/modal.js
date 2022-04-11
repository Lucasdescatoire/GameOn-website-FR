
/* Responsive */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
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


/* Modal Form */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event

function launchModal() { // launch modal form
    modalbg.style.display = "block";
}

closeModalBtn.addEventListener("click", closeModal); // close modal event

function closeModal() { // close modal form
    modalbg.style.display = "none";
    form.style.display = "block";
    confirmationValidation.style.display = "none";
}


/* Form Validator (per field) */

function validateFirstName(firstName) { // first name validation function
  if (firstName.value.trim().toString().length < 2) {
      firstName.style.border = "solid #FE142F 2px";
      return false;
  } else {
      firstName.style.border = "solid #279E7A 2px";
      return true;
  }
}

function validateLastName(lastName) { // last name validation function
  if (lastName.value.trim().toString().length < 2) {
      lastName.style.border = "solid #FE142F 2px";
      return false;
  } else {
      lastName.style.border = "solid #279E7A 2px";
      return true;
  }
}

function validateEmail(email) { // email validation function
  if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/g.test(email.value)) {
      email.style.border = "solid #FE142F 2px";
      return false;
  } else {
      email.style.border = "solid #279E7A 2px";
      return true;
  }
}

function validateBirthDate(birthDate) { // birth date validation function
  if (!/^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/g.test(birthDate.value)) {
      birthDate.style.border = "solid #FE142F 2px";
      return false;
  } else {
      birthDate.style.border = "solid #279E7A 2px";
      return true;
  }
}

function validateEventQuantity(eventQuantity) { // events quantity validation function
  if (!/\d/g.test(eventQuantity.value)) {
      eventQuantity.style.border = "solid #FE142F 2px";
      return false;
  } else {
      eventQuantity.style.border = "solid #279E7A 2px";
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
      return false;
  } else {
      return true;
  };
}

function validateConditionsOfUse(conditionsOfUse) { // conditions of use validation function
  if (!conditionsOfUse.checked) {
      return false;
  } else {
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
      form.style.display = "none"; // remove form
   
  }
}


/* Send Form */

form.addEventListener("submit", function (e) { // form sending
  e.preventDefault();
  validate();
});


