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
    ? content.classList.add("nav_btn--active")
    : nav_btns.forEach((navTab) => navTab.classList.remove("nav_btn--active"));
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
 * Category view - activates the chosen category
 * @param {*} category - html element
 */
const openCategory = function (category) {
  console.log(category);
  document
    .querySelector(`.category--${category.dataset.category}`)
    .classList.add("gallery-category--active");
};

/**
 * Clear the opened gallery category so other content could be presented
 *
 */
const resetActiveCategory = function () {
  document
    .querySelectorAll(".gallery-grid")
    .forEach((folder) => folder.classList.remove("gallery-category--active"));
};

/**
 * Gallery folders overview -
 * @param {boolean} state - toggles gallery folders navigation to be presented or not based on value provided
 */
const toggleFoldersOverview = function (state) {
  state
    ? gallery_sub_nav.classList.add("active")
    : gallery_sub_nav.classList.remove("active");
};

/**
 * Navigation bar interactivity (using Event handling delegation)
 */
navContainer.addEventListener("click", function (e) {
  //Event handling delegation
  const clicked = e.target.closest(".nav_btn");

  if (!clicked) return;
  if (!gallery_sub_nav.classList.contains("active")) {
    toggleFoldersOverview(true);
  }

  //Resetting active category preview
  resetActiveCategory();

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

const gallery_sub_nav = document.querySelector(".gallery_sub_nav_container");
const folder_nav_btns = document.querySelectorAll(".folder-image");

/**
 * Gallery folders sub navigation - Ordering the folder based on category
 */

gallery_sub_nav.addEventListener("click", function (e) {
  //Event delegation
  const clicked = e.target.closest(".folder-image");

  //Resetting active folder preview
  resetActiveCategory();
  toggleFoldersOverview();

  //Activating content - Folder - WIP
  // document
  //   .querySelector(`.folder_content--${clicked.dataset.folder}`)
  //   .classList.add("gallery-folder--active");

  //Activating content based on category
  openCategory(clicked);
});

const landingCategoryNav = document.querySelector(".landing");
const categories = document.querySelectorAll(".group");

/**
 * Landing page navigation(to gallery -> category)
 */

landingCategoryNav.addEventListener("click", function (e) {
  const clicked = e.target.closest(".group");

  //Resetting active folder preview
  resetActiveCategory();
  toggleFoldersOverview();

  // if (clicked !== info) {
  //Resetting active btn and active tab
  deactivateContentView();
  toggleBtnView(null, clicked);

  //Activating gallery content tab and btn UI
  activateContentView(clicked);
  toggleBtnView(true, nav_btns[1]);

  //Activating gallery category
  openCategory(clicked);
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

function galleryControl() {}

nextPicture.addEventListener("click", nextImage);
prevPicture.addEventListener("click", prevImage);
