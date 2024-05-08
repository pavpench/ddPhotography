"use strict";

const navContainer = document.querySelector(".nav-container");
const nav_btns = document.querySelectorAll(".nav_btn");
const nav_content = document.querySelectorAll(".nav_content");
const overlay = document.querySelector(".overlay");
const info = document.querySelector(".info");

/**
 * Toggles Nav Btn to appear as activated or not
 */

const toggleBtnView = function (state = false) {
  return state
    ? nav_btns.forEach((navTab) => navTab.classList.add("nav_btn--active"))
    : nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
};

/**
 * Content view
 * Hiding the rest of the content which is not chosen
 */

const deactivateContentView = function () {
  nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
  nav_content.forEach((content) => {
    content.classList.remove("nav_content--active");
  });
};

/**
 * Content view
 * Showing the chosen content based on the Clicked element from the navigation
 * @param {*} content
 */

const activateContentView = function (content) {
  document
    .querySelector(`.nav_content--${content.dataset.tab}`)
    .classList.add("nav_content--active");

  content.classList.add("nav_btn--active");
};

/**
 * Navigation bar interactivity (using Event handling delegation)
 */
navContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav_btn");

  if (!clicked) return;
  if (!gallery_sub_nav.classList.contains("active")) {
    gallery_sub_nav.classList.add("active");
  }

  //Resetting active folder preview - WIP
  document
    .querySelectorAll(".gallery-grid")
    .forEach((folder) => folder.classList.remove("gallery-folder-active"));

  if (clicked !== info) {
    //Resetting active btn and active tab,
    deactivateContentView();

    //Activating content based on nav button clicked
    activateContentView(clicked);
  }

  // making only modal appear while other tabs are active
  if (clicked === info) {
    nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
    activateContentView(clicked);
  }

  //Activating content - Navigation (based on nav button clicked)
  // document
  //   .querySelector(`.nav_content--${clicked.dataset.tab}`)
  //   .classList.add("nav_content--active");

  // clicked.classList.add("nav_btn--active");
});

const gallery_sub_nav = document.querySelector(".gallery_sub_nav_container");
const folder_nav_btns = document.querySelectorAll(".folder-image");

/**
 * Gallery folders sub navigation
 */

gallery_sub_nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".folder-image");

  //Resetting active folder preview - WIP
  document
    .querySelectorAll(".gallery-grid")
    .forEach((folder) => folder.classList.remove("gallery-folder-active"));

  gallery_sub_nav.classList.remove("active");
  // End of Resetting

  //Activating content - Folder
  document
    .querySelector(`.folder_content--${clicked.dataset.tab}`)
    .classList.add("gallery-folder-active");
});

const landing_category_nav = document.querySelector(".landing");
const categories = document.querySelectorAll(".group");

/**
 * Landing page navigation(to gallery -> category)
 */

landing_category_nav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".group");

  //Resetting active folder preview - WIP
  document
    .querySelectorAll(".gallery-grid")
    .forEach((folder) => folder.classList.remove("gallery-folder-active"));

  gallery_sub_nav.classList.remove("active");

  // if (clicked !== info) {
  //Resetting active btn and active tab
  deactivateContentView();

  //Activating content based on nav button clicked
  document
    .querySelector(`.nav_content--${clicked.dataset.tab}`)
    .classList.add("nav_content--active");

  clicked.classList.add("nav_btn--active");
  // }

  //Activating content - Navigation (based on nav button clicked)
  document
    .querySelector(`.nav_content--${clicked.dataset.tab}`)
    .classList.add("nav_content--active");

  //Activating content - Based on category
  document
    .querySelector(`.category--${clicked.dataset.category}`)
    .classList.add("gallery-folder-active");

  console.log(clicked.dataset.tab);
});

const gallery_grid_container = document.querySelectorAll(".gallery-grid");
const image_popup = document.getElementById("image_popup");
const images = Array.from(document.querySelectorAll(".gallery-image"));
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
  startImage = images.indexOf(clickedImage);
}

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

function galleryControl() {}

nextPicture.addEventListener("click", nextImage);
prevPicture.addEventListener("click", prevImage);
