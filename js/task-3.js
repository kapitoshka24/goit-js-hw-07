const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

const createGallery = (images) => {
  return images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join(" ");
};

galleryRef.insertAdjacentHTML("beforeend", createGallery(images));
galleryRef.classList.add("gallery-list");

const itemsRef = galleryRef.children;

[...itemsRef].forEach((elem) => {
  elem.classList.add("gallery__item");
  elem.querySelector("img").classList.add("gallery__img");
});
