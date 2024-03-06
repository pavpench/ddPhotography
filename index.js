"use strict";

const navContainer = document.querySelector(".nav-container");
const nav_btns = document.querySelectorAll(".nav_btn");
const nav_content = document.querySelectorAll(".nav_content");
const overlay = document.querySelector(".overlay");
const info = document.querySelector(".info");

//Navigation bar interactivity (using Event handling delegation)
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_btn");

  if (!clicked) return;

  //Resetting active btn and active tab, making modal appear while other tabs are active
  if (clicked !== info) {
    nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
    nav_content.forEach((content) => {
      content.classList.remove("nav_content--active");
    });
    //Activating content based on nav button clicked
    document
      .querySelector(`.nav_content--${clicked.dataset.tab}`)
      .classList.add("nav_content--active");

    clicked.classList.add("nav_btn--active");
  }
  if (clicked === info) {
    nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
  }

  //Activating content based on nav button clicked
  document
    .querySelector(`.nav_content--${clicked.dataset.tab}`)
    .classList.add("nav_content--active");

  clicked.classList.add("nav_btn--active");
});

//Gallery interactivity

const gallery_grid_container = document.querySelector(".gallery-grid");
const image_popup = document.getElementById("image_popup");
const img_popup_overlay = document.querySelector(".overlay-popup-container");

function showImage(clickedImage) {
  image_popup.src = clickedImage.src;
  img_popup_overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeImage() {
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

gallery_grid_container.addEventListener("click", function (e) {
  const clicked = e.target.closest(".gallery-image");
  console.log(clicked);
  showImage(clicked);
});
