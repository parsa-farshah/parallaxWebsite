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

let vhSite = window.innerHeight;
console.log(vhSite);
let shadowText = document.getElementById("shadowText");
// section have scroll
let secScroll = document.querySelector("#main");
let textOnMouse = document.querySelector("#textOnMouse");
secScroll.addEventListener("scroll", () => {
  let st = parseInt(secScroll.scrollTop);
  if (st > vhSite / 10) {
    shadowText.classList.remove("hidden");
    shadowText.classList.add("flex");
    // for text on mouse
    textOnMouse.classList.remove("opacity-100");
    textOnMouse.classList.add("opacity-40");
  } else {
    shadowText.classList.add("hidden");
    shadowText.classList.remove("flex");
    // for text on mouse
    textOnMouse.classList.remove("opacity-40");
    textOnMouse.classList.add("opacity-100");
  }
  if (st > vhSite / 3) {
    shadowText.classList.remove("opacity-50");
    shadowText.classList.add("opacity-80");
    // for text on mouse
    textOnMouse.classList.remove("opacity-40");
    textOnMouse.classList.add("opacity-20");
  } else {
    shadowText.classList.add("opacity-50");
    shadowText.classList.remove("opacity-80");
    // for text on mouse
    textOnMouse.classList.add("opacity-40");
    textOnMouse.classList.remove("opacity-20");
  }
});
