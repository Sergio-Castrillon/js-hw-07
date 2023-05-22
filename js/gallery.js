import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
const containerGallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (galleryItems) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}">
      <img
        class="gallery__image"
        src="${galleryItems.preview}"
        data-source="${galleryItems.original}"
        alt="${galleryItems.description}"
      />
    </a>
  </div>`
  )
  .join("\n");
containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
containerGallery.addEventListener("click", selectOriginalImage);
function selectOriginalImage(event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG"){
    return;
  }
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();

  containerGallery.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
  });
}