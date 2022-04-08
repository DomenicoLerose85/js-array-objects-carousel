/*
Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
*/

// array con objects

let places = [
  {
    img : 'img/01.jpg',
    country : 'Svezia',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',

  },
  {
    img : 'img/02.jpg',
    country : 'Svizzera',
    description: 'Lorem ipsum',

  },
  {
    img : 'img/03.jpg',
    country : 'Gran Bretagna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

  },
  {
    img : 'img/04.jpg',
    country : 'Germania',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

  },
  {
    img : 'img/05.jpg',
    country : 'Paradise',
    description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

  },

];
console.log(places);
let country = "";
let description = "";
let img = "";
let item

//variabile per raccogliere tutto l'html che va in items-container
let placesTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < places.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  placesTemplate += `
  <div class="item ${places}">
    <img src="${places[i].img}" />
      <div class="title">
        <h2>${country[i].country}</h2>
        <p>${description[i].description}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${thumbTemplate}">
    <img src="${places[i].img}" alt="" />
  </div>`;
}
console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
 const itemsContainer = document.querySelector(".items-container");
 const thumbsContainer = document.querySelector(".thumbs-container");
// //console.log(itemContainer);

// //stampo l'html corrispondente nei due contenitori
 itemsContainer.innerHTML += placesTemplate;
 thumbsContainer.innerHTML += thumbTemplate;
 document.querySelector(".item").classList.add("active");

// //Pulsanti
// .next .fa-circle-chevron-down
// .prev .fa-circle-chevron-up
// //metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
console.log(next, prev);

function slideDown() {
//   //prendere immagine con currentIndexActive e togliere classe active
const imgs = document.getElementsByClassName("item");
imgs[currentIndexActive].classList.remove("active");
const thumbs = document.getElementsByClassName("thumb");
thumbs[currentIndexActive].classList.remove("active");
};
console.log(imgs);
if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
   currentIndexActive++;
}
slideDown();

console.log(currentIndexActive);
img[currentIndexActive].classList.add("active");
console.log(currentIndexActive);
thumbs[currentIndexActive].classList.add("active");


function slideUp() {
    const imgs = document.getElementsByClassName("item");
    imgs[currentIndexActive].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[currentIndexActive].classList.remove("active");
console.log(imgs);
 if (currentIndexActive === 0) {
   currentIndexActive = items.length - 1;
} else {
   currentIndexActive--;
}
console.log(currentIndexActive);
imgs[currentIndexActive].classList.add("active");
console.log(currentIndexActive);
thumbs[currentIndexActive].classList.add("active");
}
slideUp();

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);
