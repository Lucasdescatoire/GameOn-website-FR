
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

