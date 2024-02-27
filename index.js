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

  if (clicked === info) {
    overlay.classList.remove("hidden");
  } else overlay.classList.add("hidden");

  nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
  nav_content.forEach((content) =>
    content.classList.remove("nav_content--active")
  );

  clicked.classList.add("nav_btn--active");

  document
    .querySelector(`.nav_content--${clicked.dataset.tab}`)
    .classList.add("nav_content--active");

  console.log(clicked);
});
