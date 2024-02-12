"use strict";

const navContainer = document.querySelector(".nav-container");
const overlay = document.querySelector(".overlay");

const info = document.querySelector(".info");

// contact.addEventListener("click", function () {
//   modal.style.display = "block";
// });

//Event handling delegation
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-btn");
  if (!clicked) return;
  if (clicked === info) {
    overlay.classList.remove("hidden");
  } else overlay.classList.add("hidden");
  console.log(clicked);
});
