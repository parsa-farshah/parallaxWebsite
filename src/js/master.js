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
let _plantImg = document.querySelector("#plantImg");
let _consoleImg = document.querySelector("#consoleImg");
let _shelfImg = document.querySelector("#shelfImg");
secScroll.addEventListener("scroll", () => {
  let st = parseInt(secScroll.scrollTop);
  if (st > vhSite / 10) {
    shadowText.classList.remove("hidden");
    shadowText.classList.add("flex");
    // for text on mouse
    textOnMouse.classList.remove("opacity-100");
    textOnMouse.classList.add("opacity-40");
  } else {
    shadowText.classList.remove("flex");
    shadowText.classList.add("hidden");
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
    // shadow on text
    shadowText.classList.add("hidden");

    // for text on mouse
    textOnMouse.classList.add("hidden");
  } else {
    textUnderMouse.classList.remove("hidden");
    textUnderMouse.classList.add("flex");
    shadowText.classList.add("opacity-80");
    shadowText.classList.remove("opacity-100");
    // shadow on text
    shadowText.classList.remove("hidden");
    shadowText.classList.add("flex");
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
  if (st > vhSite * 3) {
    mouse.classList.add("translate-z-[-1500px]");
    // plant image
    _plantImg.classList.remove("left-[-200px]");
    _plantImg.classList.add("left-[-150px]");
    // console image
    _consoleImg.classList.remove("top-[100%]");
    _consoleImg.classList.add("top-[70%]");
    // shelf
    _shelfImg.classList.remove("left-[150%]");
    _shelfImg.classList.add("left-[110%]");
  } else {
    mouse.classList.remove("translate-z-[-1500px]");
    // plant image
    _plantImg.classList.remove("left-[-150px]");
    _plantImg.classList.add("left-[-200px]");
    // console image
    _consoleImg.classList.remove("top-[70%]");
    _consoleImg.classList.add("top-[100%]");
    // shelf
    _shelfImg.classList.remove("left-[110%]");
    _shelfImg.classList.add("left-[150%]");
  }
  if (st > vhSite * 3.25) {
    // plant image
    _plantImg.classList.remove("left-[-150px]");
    _plantImg.classList.add("left-[-40px]");
    _plantImg.classList.add("bottom-[40px]");
    // console image
    _consoleImg.classList.remove("top-[70%]");
    _consoleImg.classList.add("top-[65%]");
    // shelf
    _shelfImg.classList.remove("left-[110%]");
    _shelfImg.classList.add("left-[105%]");
  } else {
    // plant image
    _plantImg.classList.remove("left-[-40px]");
    _plantImg.classList.remove("bottom-[40px]");
    _plantImg.classList.add("left-[-150px]");

    // console image
    _consoleImg.classList.remove("top-[65%]");
    _consoleImg.classList.add("top-[70%]");
    // shelf
    _shelfImg.classList.remove("left-[105%]");
    _shelfImg.classList.add("left-[110%]");
  }
  if (st > vhSite * 3.5) {
    // plant image
    _plantImg.classList.remove("left-[-40px]");
    _plantImg.classList.add("left-[-30px]");
    _plantImg.classList.remove("bottom-[40px]");
    _plantImg.classList.add("bottom-[80px]");
    // console image
    _consoleImg.classList.remove("top-[65%]");
    _consoleImg.classList.add("top-[62%]");
    // shelf
    _shelfImg.classList.remove("left-[105%]");
    _shelfImg.classList.add("left-[95%]");
  } else {
    // plant image
    _plantImg.classList.remove("bottom-[80px]");
    _plantImg.classList.remove("left-[-30px]");
    _plantImg.classList.add("left-[-40px]");
    _plantImg.classList.add("bottom-[40px]");

    // console image
    _consoleImg.classList.remove("top-[62%]");
    _consoleImg.classList.add("top-[65%]");
    // shelf
    _shelfImg.classList.remove("left-[95%]");
    _shelfImg.classList.add("left-[105%]");
  }
});
