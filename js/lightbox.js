import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
const listGallery = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__item" href="${galleryItems.original}">
      <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
    </a>`
  )
  .join("\n");
listGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
listGallery.addEventListener("click", (e) => e.preventDefault());

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });
 