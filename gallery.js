window.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.querySelector("#filter-container");
  const galleryContainer = document.querySelector("#gallery-container");
  const landingCategories = document.querySelectorAll(".group");

  /**
   * Filter images based on the category
   * @param {*} event
   */
  const filterImages = (event) => {
    const clicked = event.target.closest(".filter-element");
    document.querySelectorAll(".filter-element").forEach((element) => {
      element.classList.remove("filter-active");
    });
    document
      .querySelector(`#${clicked.dataset.category}`)
      .classList.add("filter-active");

    document.querySelectorAll(".gallery-image").forEach((element) => {
      if (
        (clicked.dataset.category !== element.dataset.category) &
        (clicked.dataset.category !== "all")
      ) {
        element.classList.add("hide-image");
      } else {
        element.classList.remove("hide-image");
      }
    });
  };

  /** Rendering pictures filter component */

  landingCategories.forEach((element) => {
    element.addEventListener("click", filterImages);
  });

  categories.forEach((element) => {
    const domElement = document.createElement("span");
    domElement.innerText = element.name;
    domElement.classList.add("filter-element");

    if (element.filter === "all") {
      domElement.classList.add("filter-active");
    }
    domElement.dataset.category = element.filter;
    domElement.id = element.filter;

    domElement.addEventListener("click", filterImages);

    filterContainer.appendChild(domElement);
  });

  /**
   * Rendering gallery images
   */
  images.forEach((element) => {
    const domElement = document.createElement("img");
    domElement.src = `${element.src}`;
    domElement.alt = "";
    domElement.id = `${element.id}`;
    domElement.dataset.category = element.category;
    domElement.classList.add("gallery-image");

    galleryContainer.appendChild(domElement);
  });
});
