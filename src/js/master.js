// language click
let frBtn = document.querySelector("#frBtn");
let arrowBottom = document.querySelector("#arrowBottom");
let en = document.querySelector("#En");
frBtn.addEventListener("click", () => {
  arrowBottom.classList.toggle("rotate-0");
  arrowBottom.classList.toggle("rotate-180");
  en.classList.toggle("h-full");
  en.classList.toggle("border-0");
  en.classList.toggle("border");
  en.classList.toggle("overflow-hidden");
});
