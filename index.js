"use strict";

const navContainer = document.querySelector(".nav-container");
const nav_btns = document.querySelectorAll(".nav_btn");
const nav_content = document.querySelectorAll(".nav_content");
const overlay = document.querySelector(".overlay");
const info = document.querySelector(".nav_info_btn");

/**
 * Toggles Nav Btn to appear as activated or not
 * @param {boolean} state - activate or deactivate the button based on passed state
 * @param {*} content - html element
 */
const toggleBtnView = function (state = false, content) {
  state
    ? content.classList.add("btn--active")
    : nav_btns.forEach((navTab) => navTab.classList.remove("btn--active"));
};

/**
 * Content view -
 * Activating the chosen content based on the Clicked element from the navigation
 * @param {*} content - html element
 */
const activateContentView = function (content) {
  document
    .querySelector(`.nav_content--${content.dataset.tab}`)
    .classList.add("nav_content--active");
};

/**
 * Content view - Hiding the rest of the content which is not chosen
 */
const deactivateContentView = function () {
  nav_content.forEach((content) => {
    content.classList.remove("nav_content--active");
  });
};

/**
 * Navigation bar interactivity (using Event handling delegation)
 */
navContainer.addEventListener("click", function (e) {
  //Event handling delegation
  const clicked = e.target.closest(".nav_btn");

  if (!clicked) return;

  // general use case for navigation bar
  if (clicked !== info) {
    toggleBtnView();
    deactivateContentView();
    activateContentView(clicked);
    toggleBtnView(true, clicked);
  }

  // making only modal appear over last chosen tab active as background
  if (clicked === info) {
    toggleBtnView();
    activateContentView(clicked);
    toggleBtnView(true, clicked);
  }
});

const landingCategoryNav = document.querySelector(".landing");

/**
 * Landing page navigation( gallery to category)
 */

landingCategoryNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".group");

  //Resetting active btn and active tab
  deactivateContentView();
  toggleBtnView(null, clicked);

  //Activating gallery content tab and btn UI
  activateContentView(clicked);
  toggleBtnView(true, nav_btns[1]);
});

const gallery_grid_container = document.querySelectorAll(".gallery-grid");
const image_popup = document.getElementById("image_popup");
const img_popup_overlay = document.querySelector(".overlay-popup-container");
const closing_btn = document.querySelector(".close-button");
const nextPicture = document.querySelector(".btnNext");
const prevPicture = document.querySelector(".btnPrev");
let currentImage;
let startImage;

/**
 * Gallery interactivity
 */

function showImage(clickedImage) {
  img_popup_overlay.style.display = "grid";
  image_popup.style.display = "block";
  image_popup.src = clickedImage.src;
  document.body.style.overflow = "hidden";
  startImage = clickedImage.id * 1;
}

/**
 * Gallery interactivity
 */

function closeImage() {
  img_popup_overlay.style.display = "none";
  image_popup.style.display = "none";
  document.body.style.overflow = "auto";
}

gallery_grid_container.forEach((gallery) => {
  gallery.addEventListener("click", function (e) {
    let clicked = e.target.closest(".gallery-image");
    showImage(clicked);
  });
});

closing_btn.addEventListener("click", closeImage);

function nextImage() {
  let nextImg = startImage + 1;
  showImage(images[nextImg]);
}
function prevImage() {
  let prevImage = startImage - 1;
  showImage(images[prevImage]);
}

nextPicture.addEventListener("click", nextImage);
prevPicture.addEventListener("click", prevImage);

/**
 * Rendering gallery images
 */
const galleryContainer = document.querySelector("#gallery-container");

images.forEach((element) => {
  const domElement = document.createElement("img");
  domElement.src = `${element.src}`;
  domElement.alt = "";
  domElement.id = `${element.id}`;
  domElement.dataset.category = element.category;
  domElement.classList.add("gallery-image");

  galleryContainer.appendChild(domElement);
});
