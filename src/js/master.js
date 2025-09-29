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
let navbar = document.querySelector("#navbar");
let textUnderMouse = document.querySelector("#textUnderMouse");
let mouse = document.querySelector("#mouse");
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
    shadowText.classList.add("opacity-90");
    // for text on mouse
    textOnMouse.classList.remove("opacity-40");
    textOnMouse.classList.add("opacity-20");
    // navbar
    navbar.classList.remove("top-0");
    navbar.classList.add("top-[-100px]");
  } else {
    shadowText.classList.add("opacity-50");
    shadowText.classList.remove("opacity-90");
    // for text on mouse
    textOnMouse.classList.add("opacity-40");
    textOnMouse.classList.remove("opacity-20");
    // navbar
    navbar.classList.add("top-0");
    navbar.classList.remove("top-[-100px]");
  }
  if (st > vhSite) {
    textUnderMouse.classList.add("hidden");

    // for text on mouse
    textOnMouse.classList.add("hidden");
  } else {
    textUnderMouse.classList.remove("hidden");
    textUnderMouse.classList.add("flex");
    shadowText.classList.add("opacity-80");
    shadowText.classList.remove("opacity-100");
    // shadow text
    shadowText.classList.add("opacity-50");
    shadowText.classList.remove("opacity-80");
    // for text on mouse
    textOnMouse.classList.remove("hidden");
    textOnMouse.classList.add("flex");
  }
  if (st > vhSite * 2) {
    mouse.classList.add("translate-z-[-400px]");
  } else {
    mouse.classList.remove("translate-z-[-400px]");
  }

  if (st > vhSite * 2.25) {
    mouse.classList.add("translate-z-[-700px]");
  } else {
    mouse.classList.remove("translate-z-[-700px]");
  }
  if (st > vhSite * 2.75) {
    mouse.classList.add("translate-z-[-1100px]");
    mouse.classList.add("translate-y-[-200px]");
  } else {
    mouse.classList.remove("translate-z-[-1100px]");
    mouse.classList.remove("translate-y-[-200px]");
  }
});
