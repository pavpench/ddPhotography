"use strict";

const navContainer = document.querySelector(".nav-container");
const nav_btns = document.querySelectorAll(".nav_btn");
const nav_content = document.querySelectorAll(".nav_content");
const overlay = document.querySelector(".overlay");

const info = document.querySelector(".info");

//Event handling delegation
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_btn");

  if (!clicked) return;

  //Resetting active btn and active tab, making modal appear while other tabs are active
  if (clicked !== info) {
    nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
    nav_content.forEach((content) => {
      content.classList.remove("nav_content--active");
    });
  }

  //Activating content based on nav button clicked
  document
    .querySelector(`.nav_content--${clicked.dataset.tab}`)
    .classList.add("nav_content--active");

  clicked.classList.add("nav_btn--active");
});
