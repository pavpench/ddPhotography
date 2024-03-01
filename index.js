"use strict";

console.log("JS status check");

const modal = document.querySelector("#main-modal-container");

const contact = document.querySelector("#info");

contact.addEventListener("click", function () {
  modal.style.display = "block";
});
