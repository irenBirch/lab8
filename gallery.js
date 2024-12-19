//import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js"
// Масив об'єктів з інформацією про зображення
const images = [
  {
    preview:
      "https://i.pinimg.com/736x/83/02/e6/8302e668ed47ad9b79b1b9ba4d17edba.jpg",
    original:
      "https://i.pinimg.com/736x/83/02/e6/8302e668ed47ad9b79b1b9ba4d17edba.jpg",
    description: " ~~Hades & Persephone~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/f2/d4/fc/f2d4fc14cf2348f4f7f76fefb451adf4.jpg",
    original:
      "https://i.pinimg.com/736x/f2/d4/fc/f2d4fc14cf2348f4f7f76fefb451adf4.jpg",
    description: " ~~amor & psyche~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/4f/dd/72/4fdd72729e57998d748560d9f987d04e.jpg",
    original:
      "https://i.pinimg.com/736x/4f/dd/72/4fdd72729e57998d748560d9f987d04e.jpg",
    description: " ~~Athena~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/1d/a0/ee/1da0eefe97d4920836e87f7c2b24715b.jpg",
    original:
      "https://i.pinimg.com/736x/1d/a0/ee/1da0eefe97d4920836e87f7c2b24715b.jpg",
    description: " ~~Themis~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/cd/16/9d/cd169d6c4e3f6143484501f688972504.jpg",
    original:
      "https://i.pinimg.com/736x/cd/16/9d/cd169d6c4e3f6143484501f688972504.jpg",
    description: " ~~Aphrodite~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/7e/35/a3/7e35a37a4718ea4c57c97bde5c2a477a.jpg",
    original:
      "https://i.pinimg.com/736x/7e/35/a3/7e35a37a4718ea4c57c97bde5c2a477a.jpg",
    description: " ~~Hecate~~ ",
  },
  {
    preview:
      "https://i.pinimg.com/736x/23/34/39/233439671bbc2701e97a30dae0401093.jpg",
    original:
      "https://i.pinimg.com/736x/23/34/39/233439671bbc2701e97a30dae0401093.jpg",
    description: " ~~Dionysus~~",
  },
  {
    preview:
      "https://th.bing.com/th/id/OIP.rj90OPEHAlyTol2Aai5HMgHaJl?rs=1&pid=ImgDetMain",
    original:
      "https://th.bing.com/th/id/OIP.rj90OPEHAlyTol2Aai5HMgHaJl?rs=1&pid=ImgDetMain",
    description: " ~~Moirai-Three Fates of Destiny~~ ",
  },
];

// Елемент списку галереї
let gallery = document.querySelector("ul.gallery");
// Цикл, що перебирає масив зображень та додає кожне зображення до DOM
images.forEach((image) => {
  imageAdd(image);
});
// Функція, що створює елементи списку та додає їх до галереї
function imageAdd(imgObj) {
  let imgElem = document.createElement("img");
  imgElem.src = imgObj.preview;
  imgElem.alt = imgObj.description;

  let listItem = document.createElement("li");
  listItem.append(imgElem);
  gallery.append(listItem);
}
// Обробник події "click" для галереї
gallery.addEventListener("click", function (event) {
  let clickedImage = images.find((img) => img.preview === event.target.src);
  console.log(clickedImage.original);
  // Створення модального вікна з повнорозмірним зображенням
  const instance = basicLightbox.create(
    `
        <div class="modalWindow">
                 <img src="${clickedImage.original}" alt="${clickedImage.description}">
                <p>${clickedImage.description}</p>
        </div>
    `,
    { closable: true }
  ); // Налаштування модального вікна, щоб його можна було закривати

  // Відображення модального вікна
  instance.show();
});
