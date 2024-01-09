// Script for navigation bar
let $ = document;
let mainImg = $.getElementById("mainImg");
let smallImgs = $.querySelectorAll(".small-img");
const bar = $.getElementById("bar");
const nav = $.getElementById("navbar");
const close = $.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

smallImgs.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});
