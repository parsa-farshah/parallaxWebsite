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
const lineWhiteLeft = document.querySelector("#lineWhiteLeft");
const lineWhiteRight = document.querySelector("#lineWhiteRight");
const bgWhitePers = document.querySelector("#bgWhitePers");
const text1BgWhite = document.querySelector("#text1BgWhite");
const text2BgWhite = document.querySelector("#text2BgWhite");
const bgShadowOnCaeli = document.querySelector("#bgShadowOnCaeli");
const afterTextSec = document.querySelector("#afterTextSec");
const bgWhite = document.querySelector("#bgWhite");
const ourMision = document.querySelector("#ourMision");
const mouseDiv = document.querySelector("#mouseDiv");
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
    // line white
    lineWhiteLeft.classList.remove("hidden");
    // line white right
    lineWhiteRight.classList.remove("hidden");
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
    // line white
    lineWhiteLeft.classList.add("hidden");
    // line white right
    lineWhiteRight.classList.add("hidden");
  }
  if (st > vhSite * 3.75) {
    bgWhitePers.classList.remove("translate-z-[-800000px]");
    bgWhitePers.classList.add("translate-z-[-2000px]");
  } else {
    bgWhitePers.classList.remove("translate-z-[-2000px]");
    bgWhitePers.classList.add("translate-z-[-800000px]");
  }
  if (st > vhSite * 4) {
    bgWhitePers.classList.remove("translate-z-[-2000px]");
    bgWhitePers.classList.add("translate-z-[-1000px]");
  } else {
    bgWhitePers.classList.remove("translate-z-[-1000px]");
    bgWhitePers.classList.add("translate-z-[-2000px]");
  }
  if (st > vhSite * 4.25) {
    bgWhitePers.classList.remove("translate-z-[-1000px]");
    bgWhitePers.classList.add("translate-z-[-200px]");
    // text1
    text1BgWhite.classList.remove("hidden");
    text1BgWhite.classList.add("block");
    // text1
    text1BgWhite.classList.add("opacity-20");
    text1BgWhite.classList.remove("opacity-60");
    // text2
    text2BgWhite.classList.add("opacity-20");
    text2BgWhite.classList.remove("opacity-60");

    // text2
    text2BgWhite.classList.remove("hidden");
    text2BgWhite.classList.add("block");
  } else {
    text2BgWhite.classList.remove("opacity-20");
    text1BgWhite.classList.remove("opacity-20");
    text1BgWhite.classList.add("hidden");
    text2BgWhite.classList.add("hidden");
    bgWhitePers.classList.remove("translate-z-[-200px]");
    bgWhitePers.classList.add("translate-z-[-1000px]");
  }
  if (st > vhSite * 4.5) {
    bgWhitePers.classList.remove("translate-z-[-200px]");
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.remove("opacity-20");
    text2BgWhite.classList.remove("opacity-20");
    text1BgWhite.classList.add("opacity-60");
    text2BgWhite.classList.add("opacity-60");
  } else {
    bgWhitePers.classList.remove("translate-z-[-50px]");
    bgWhitePers.classList.add("translate-z-[-200px]");
    text1BgWhite.classList.remove("opacity-60");
    text2BgWhite.classList.remove("opacity-60");
    text1BgWhite.classList.add("opacity-20");
    text2BgWhite.classList.add("opacity-20");
  }
  if (st > vhSite * 5.5) {
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.remove("opacity-60");
    text2BgWhite.classList.remove("opacity-60");
  } else {
  }
  if (st > vhSite * 6) {
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.add("opacity-70");
    text2BgWhite.classList.add("opacity-70");
  } else {
    text1BgWhite.classList.remove("opacity-70");
    text2BgWhite.classList.remove("opacity-70");
  }
  if (st > vhSite * 6.5) {
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.remove("opacity-70");
    text2BgWhite.classList.remove("opacity-70");
    text1BgWhite.classList.add("opacity-40");
    text2BgWhite.classList.add("opacity-40");
  } else {
    text1BgWhite.classList.remove("opacity-40");
    text2BgWhite.classList.remove("opacity-40");
  }
  if (st > vhSite * 6.75) {
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.remove("opacity-40");
    text2BgWhite.classList.remove("opacity-40");
    text1BgWhite.classList.add("opacity-10");
    text2BgWhite.classList.add("opacity-10");
  } else {
    text1BgWhite.classList.remove("opacity-10");
    text2BgWhite.classList.remove("opacity-10");
  }
  if (st > vhSite * 7) {
    bgWhitePers.classList.add("translate-z-[-50px]");
    text1BgWhite.classList.add("hidden");
    text2BgWhite.classList.add("hidden");
    afterTextSec.classList.remove("md:hidden");
    afterTextSec.classList.add("md:flex");
    // images back remove
    _shelfImg.classList.remove("left-[105%]");
    _consoleImg.classList.remove("top-[65%]");
    _plantImg.classList.remove("left-[-40px]");
    _plantImg.classList.remove("bottom-[40px]");
    // images back add
    _shelfImg.classList.add("left-[125%]");
    _consoleImg.classList.add("top-[100%]");
    _plantImg.classList.add("left-[-20%]");
    _plantImg.classList.add("top-[100%]");
  } else {
    text1BgWhite.classList.remove("hidden");
    text2BgWhite.classList.remove("hidden");
    afterTextSec.classList.remove("md:flex");
    text1BgWhite.classList.add("block");
    text2BgWhite.classList.add("block");
    afterTextSec.classList.add("md:hidden");
    // images back remove
    _shelfImg.classList.remove("left-[125%]");
    // _consoleImg.classList.remove("top-[100%]");
    _plantImg.classList.remove("left-[-20%]");
    _plantImg.classList.remove("top-[100%]");
    // images back add
    _shelfImg.classList.add("left-[105%]");
    // _consoleImg.classList.add("top-[65%]");
    _plantImg.classList.add("left-[-40px]");
    _plantImg.classList.add("bottom-[40px]");
  }
  if (st > vhSite * 7.25) {
    bgWhite.classList.remove("top-1/2");
    bgWhite.classList.add("top-[10%]");
    mouseDiv.classList.add("translate-y-[-80%]");
  } else {
    bgWhite.classList.remove("top-[10%]");
    bgWhite.classList.add("top-1/2");
    mouseDiv.classList.remove("translate-y-[-80%]");
  }
  if (st > vhSite * 7.5) {
    mouseDiv.classList.remove("translate-y-[-80%]");
    mouseDiv.classList.add("translate-y-[-160%]");
    bgWhite.classList.remove("top-[10%]");
    bgWhite.classList.add("top-[-60%]");
  } else {
    mouseDiv.classList.remove("translate-y-[-160%]");
    bgWhite.classList.remove("top-[-60%]");
    // bgWhite.classList.add("top-[10%]");
  }
});
