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
const shadowGreen = document.querySelector("#shadowGreen");
const Manufacturing = document.querySelector("#Manufacturing");
const locally = document.querySelector("#locally");
const professionals = document.querySelector("#professionals");
const proImg = document.querySelector("#proImg");
const ourImg = document.querySelector("#ourImg");
const condImg = document.querySelector("#condImg");
const bg3d = document.querySelector("#bg3d");
const textBg3D = document.querySelector("#textBg3D");
const mount = document.querySelector("#mount");
const grass = document.querySelector("#grass");
const footer = document.querySelector("#footer");
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
    // line white
    lineWhiteLeft.classList.add("hidden");
    lineWhiteRight.classList.add("hidden");
    //
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
    ourMision.classList.remove("top-[100%]");
    ourMision.classList.add("top-[60%]");
  } else {
    bgWhite.classList.remove("top-[10%]");
    bgWhite.classList.add("top-1/2");
    mouseDiv.classList.remove("translate-y-[-80%]");
    ourMision.classList.remove("top-[60%]");
    ourMision.classList.add("top-[100%]");
  }
  if (st > vhSite * 7.5) {
    mouseDiv.classList.remove("translate-y-[-80%]");
    mouseDiv.classList.add("translate-y-[-160%]");
    bgWhite.classList.remove("top-[10%]");
    bgWhite.classList.add("top-[-60%]");
    ourMision.classList.remove("top-[60%]");
    ourMision.classList.add("top-[0%]");
  } else {
    mouseDiv.classList.remove("translate-y-[-160%]");
    bgWhite.classList.remove("top-[-60%]");
    // bgWhite.classList.add("top-[10%]");
    ourMision.classList.remove("top-[0%]");
    ourMision.classList.add("top-[60%]");
  }
  if (st > vhSite * 7.75) {
    shadowGreen.classList.remove("left-[-240%]");
    shadowGreen.classList.add("left-[0%]");
    // shadowGreen.classList.add("left-[20%]");
  } else {
    // shadowGreen.classList.remove("left-[20%]");
    shadowGreen.classList.remove("left-[0%]");
    shadowGreen.classList.add("left-[-240%]");
  }
  if (st > vhSite * 8) {
    shadowGreen.classList.remove("left-[0%]");
    shadowGreen.classList.add("left-[50%]");
  } else {
    shadowGreen.classList.remove("left-[50%]");
    shadowGreen.classList.add("left-[0%]");
  }
  if (st > vhSite * 8.5) {
    shadowGreen.classList.remove("left-[50%]");
    shadowGreen.classList.add("left-[120%]");
  } else {
    shadowGreen.classList.remove("left-[120%]");
    shadowGreen.classList.add("left-[50%]");
  }
  if (st > vhSite * 9) {
    Manufacturing.classList.add("hidden");
    locally.classList.remove("hidden");
    locally.classList.add("block");
    shadowGreen.classList.add("hidden");
  } else {
    shadowGreen.classList.remove("hidden");
    Manufacturing.classList.remove("hidden");
    Manufacturing.classList.add("block");
    locally.classList.remove("block");
    locally.classList.add("hidden");
  }
  if (st > vhSite * 9.25) {
    ourMision.classList.add("translate-y-[-10%]");
  } else {
    ourMision.classList.remove("translate-y-[-10%]");
  }
  if (st > vhSite * 9.5) {
    ourMision.classList.remove("translate-y-[-10%]");
    ourMision.classList.add("translate-y-[-20%]");
  } else {
    ourMision.classList.remove("translate-y-[-20%]");
  }
  if (st > vhSite * 9.75) {
    ourMision.classList.remove("translate-y-[-20%]");
    ourMision.classList.add("translate-y-[-40%]");
    professionals.classList.remove("top-[100%]");
    professionals.classList.add("top-[70%]");
    proImg.classList.add("translate-y-[-3%]");
  } else {
    ourMision.classList.remove("translate-y-[-40%]");
    professionals.classList.add("top-[100%]");
    professionals.classList.remove("top-[70%]");
    proImg.classList.remove("translate-y-[-3%]");
  }
  if (st > vhSite * 10) {
    ourMision.classList.remove("translate-y-[-40%]");
    ourMision.classList.add("translate-y-[-80%]");
    professionals.classList.remove("top-[70%]");
    professionals.classList.add("top-[40%]");
    proImg.classList.add("translate-y-[-6%]");
  } else {
    ourMision.classList.remove("translate-y-[-80%]");
    professionals.classList.add("top-[70%]");
    professionals.classList.remove("top-[40%]");
    proImg.classList.remove("translate-y-[-6%]");
  }
  if (st > vhSite * 10.25) {
    ourMision.classList.remove("translate-y-[-80%]");
    ourMision.classList.add("translate-y-[-100%]");
    professionals.classList.remove("top-[40%]");
    professionals.classList.add("top-[0%]");
    proImg.classList.add("translate-y-[-9%]");
  } else {
    ourMision.classList.remove("translate-y-[-100%]");
    professionals.classList.remove("top-[0%]");
    professionals.classList.add("top-[40%]");
    proImg.classList.remove("translate-y-[-9%]");
  }
  if (st > vhSite * 10.5) {
    professionals.classList.remove("top-[0%]");
    professionals.classList.add("top-[-10%]");
    proImg.classList.add("translate-y-[-14%]");
  } else {
    professionals.classList.remove("top-[-10%]");
    // professionals.classList.add("top-[0%]");
    proImg.classList.remove("translate-y-[-14%]");
  }
  if (st > vhSite * 10.75) {
    professionals.classList.remove("top-[-10%]");
    professionals.classList.add("top-[-20%]");
    proImg.classList.add("translate-y-[-16%]");
  } else {
    professionals.classList.remove("top-[-20%]");
    proImg.classList.remove("translate-y-[-16%]");
    // professionals.classList.add("top-[-10%]");
  }
  if (st > vhSite * 11) {
    professionals.classList.remove("top-[-20%]");
    proImg.classList.remove("translate-y-[-16%]");
    professionals.classList.add("top-[-25%]");
    proImg.classList.add("translate-y-[-18%]");
  } else {
    professionals.classList.remove("top-[-25%]");
    proImg.classList.remove("translate-y-[-18%]");
    // professionals.classList.add("top-[-20%]");
    proImg.classList.add("translate-y-[-16%]");
  }
  if (st > vhSite * 11.25) {
    professionals.classList.remove("top-[-25%]");
    proImg.classList.remove("translate-y-[-18%]");
    professionals.classList.add("top-[-30%]");
    proImg.classList.add("translate-y-[-20%]");
  } else {
    professionals.classList.remove("top-[-30%]");
    proImg.classList.remove("translate-y-[-20%]");
    // professionals.classList.add("top-[-25%]");
    proImg.classList.add("translate-y-[-18%]");
  }
  if (st > vhSite * 11.5) {
    professionals.classList.remove("top-[-30%]");
    proImg.classList.remove("translate-y-[-20%]");
    professionals.classList.add("top-[-50%]");
    proImg.classList.add("translate-y-[-22%]");
    ourImg.classList.add("translate-y-[-5%]");
  } else {
    professionals.classList.remove("top-[-50%]");
    proImg.classList.remove("translate-y-[-22%]");
    // professionals.classList.add("top-[-30%]");
    proImg.classList.add("translate-y-[-20%]");
    ourImg.classList.remove("translate-y-[-5%]");
  }
  if (st > vhSite * 11.75) {
    professionals.classList.remove("top-[-50%]");
    proImg.classList.remove("translate-y-[-22%]");
    professionals.classList.add("top-[-70%]");
    proImg.classList.add("translate-y-[-24%]");
    ourImg.classList.add("translate-y-[-9%]");
  } else {
    professionals.classList.remove("top-[-70%]");
    proImg.classList.remove("translate-y-[-24%]");
    // professionals.classList.add("top-[-50%]");
    proImg.classList.add("translate-y-[-22%]");
    ourImg.classList.remove("translate-y-[-9%]");
  }
  if (st > vhSite * 11.75) {
    professionals.classList.remove("top-[-70%]");
    proImg.classList.remove("translate-y-[-24%]");
    professionals.classList.add("top-[-90%]");
    proImg.classList.add("translate-y-[-27%]");
    ourImg.classList.add("translate-y-[-11%]");
  } else {
    professionals.classList.remove("top-[-90%]");
    proImg.classList.remove("translate-y-[-27%]");
    // professionals.classList.add("top-[-70%]");
    proImg.classList.add("translate-y-[-24%]");
    ourImg.classList.remove("translate-y-[-11%]");
  }
  if (st > vhSite * 12) {
    professionals.classList.remove("top-[-90%]");
    professionals.classList.add("top-[-110%]");
    ourImg.classList.remove("translate-y-[-11%]");
    ourImg.classList.add("translate-y-[-13%]");
    condImg.classList.add("translate-y-[-3%]");
  } else {
    professionals.classList.remove("top-[-110%]");
    condImg.classList.remove("translate-y-[-3%]");
    ourImg.classList.remove("translate-y-[-13%]");
    // professionals.classList.add("top-[-90%]");
    ourImg.classList.add("translate-y-[-11%]");
  }
  if (st > vhSite * 12.25) {
    // professionals.classList.remove("top-[-110%]");
    // ourImg.classList.remove("translate-y-[-13%]");
    // condImg.classList.remove("translate-y-[-3%]");
    professionals.classList.add("top-[-130%]");
    ourImg.classList.add("translate-y-[-15%]");
    condImg.classList.add("translate-y-[-5%]");
  } else {
    professionals.classList.remove("top-[-130%]");
    ourImg.classList.remove("translate-y-[-15%]");
    condImg.classList.remove("translate-y-[-5%]");
    // professionals.classList.add("top-[-110%]");
    ourImg.classList.add("translate-y-[-13%]");
    condImg.classList.add("translate-y-[-3%]");
  }
  if (st > vhSite * 12.5) {
    professionals.classList.add("top-[-160%]");
    ourImg.classList.add("translate-y-[-17%]");
    condImg.classList.add("translate-y-[-7%]");
  } else {
    professionals.classList.remove("top-[-160%]");
    ourImg.classList.remove("translate-y-[-17%]");
    condImg.classList.remove("translate-y-[-7%]");
    ourImg.classList.add("translate-y-[-15%]");
    condImg.classList.add("translate-y-[-5%]");
  }
  if (st > vhSite * 12.75) {
    professionals.classList.remove("top-[-160%]");
    ourImg.classList.remove("translate-y-[-17%]");
    condImg.classList.remove("translate-y-[-7%]");
    professionals.classList.add("top-[-190%]");
    ourImg.classList.add("translate-y-[-19%]");
    condImg.classList.add("translate-y-[-10%]");
  } else {
    professionals.classList.remove("top-[-190%]");
    ourImg.classList.remove("translate-y-[-19%]");
    condImg.classList.remove("translate-y-[-10%]");
  }
  if (st > vhSite * 13) {
    professionals.classList.remove("top-[-190%]");
    ourImg.classList.remove("translate-y-[-19%]");
    condImg.classList.remove("translate-y-[-10%]");
    professionals.classList.add("top-[-220%]");
    ourImg.classList.add("translate-y-[-21%]");
    condImg.classList.add("translate-y-[-12%]");
  } else {
    professionals.classList.remove("top-[-220%]");
    ourImg.classList.remove("translate-y-[-21%]");
    condImg.classList.remove("translate-y-[-12%]");
  }
  if (st > vhSite * 13.25) {
    professionals.classList.remove("top-[-220%]");
    ourImg.classList.remove("translate-y-[-21%]");
    condImg.classList.remove("translate-y-[-12%]");
    professionals.classList.add("top-[-250%]");
    ourImg.classList.add("translate-y-[-23%]");
    condImg.classList.add("translate-y-[-15%]");
    bg3d.classList.remove("w-full");
    bg3d.classList.add("w-[99%]");
    textBg3D.classList.add("translate-y-[4%]");
    mount.classList.add("translate-y-[-4%]");
  } else {
    professionals.classList.remove("top-[-250%]");
    ourImg.classList.remove("translate-y-[-23%]");
    condImg.classList.remove("translate-y-[-15%]");
    bg3d.classList.remove("w-[99%]");
    bg3d.classList.add("w-full");
    textBg3D.classList.remove("translate-y-[4%]");
    mount.classList.remove("translate-y-[-4%]");
  }
  if (st > vhSite * 13.5) {
    professionals.classList.remove("top-[-250%]");
    ourImg.classList.remove("translate-y-[-23%]");
    condImg.classList.remove("translate-y-[-15%]");
    professionals.classList.add("top-[-270%]");
    ourImg.classList.add("translate-y-[-26%]");
    condImg.classList.add("translate-y-[-17%]");
    bg3d.classList.remove("w-[99%]");
    bg3d.classList.add("w-[98%]");
    textBg3D.classList.remove("translate-y-[4%]");
    mount.classList.remove("translate-y-[-4%]");
    textBg3D.classList.add("translate-y-[7%]");
    mount.classList.add("translate-y-[-7%]");
  } else {
    professionals.classList.remove("top-[-270%]");
    ourImg.classList.remove("translate-y-[-26%]");
    condImg.classList.remove("translate-y-[-17%]");
    bg3d.classList.remove("w-[98%]");
    bg3d.classList.add("w-[99%]");
    textBg3D.classList.remove("translate-y-[7%]");
    mount.classList.remove("translate-y-[-7%]");
  }
  if (st > vhSite * 13.5) {
    professionals.classList.remove("top-[-270%]");
    bg3d.classList.remove("w-[98%]");
    professionals.classList.add("top-[-290%]");
    bg3d.classList.add("w-[96%]");
    textBg3D.classList.remove("translate-y-[7%]");
    mount.classList.remove("translate-y-[-7%]");
    textBg3D.classList.add("translate-y-[9%]");
    mount.classList.add("translate-y-[-9%]");
    grass.classList.add("translate-y-[2%]");
  } else {
    professionals.classList.remove("top-[-290%]");
    bg3d.classList.remove("w-[96%]");
    textBg3D.classList.remove("translate-y-[9%]");
    mount.classList.remove("translate-y-[-9%]");
  }
  if (st > vhSite * 13.5) {
    professionals.classList.remove("top-[-290%]");
    textBg3D.classList.remove("translate-y-[9%]");
    mount.classList.remove("translate-y-[-9%]");
    grass.classList.remove("translate-y-[2%]");
    bg3d.classList.remove("w-[96%]");
    professionals.classList.add("top-[-300%]");
    bg3d.classList.add("w-[95.5%]");
    textBg3D.classList.add("translate-y-[11%]");
    mount.classList.add("translate-y-[-11%]");
    grass.classList.add("translate-y-[4%]");
  } else {
    professionals.classList.remove("top-[-300%]");
    bg3d.classList.remove("w-[95.5%]");
    textBg3D.classList.remove("translate-y-[11%]");
    mount.classList.remove("translate-y-[-11%]");
    grass.classList.remove("translate-y-[4%]");
  }
  if (st > vhSite * 13.75) {
    professionals.classList.remove("top-[-300%]");
    textBg3D.classList.remove("translate-y-[11%]");
    mount.classList.remove("translate-y-[-11%]");
    grass.classList.remove("translate-y-[4%]");
    professionals.classList.add("top-[-310%]");
    textBg3D.classList.add("translate-y-[12%]");
    mount.classList.add("translate-y-[-13%]");
    grass.classList.add("translate-y-[8%]");
  } else {
    professionals.classList.remove("top-[-310%]");
    textBg3D.classList.remove("translate-y-[12%]");
    mount.classList.remove("translate-y-[-13%]");
    grass.classList.remove("translate-y-[8%]");
  }
  if (st > vhSite * 14) {
    professionals.classList.remove("top-[-310%]");
    textBg3D.classList.remove("translate-y-[12%]");
    mount.classList.remove("translate-y-[-13%]");
    grass.classList.remove("translate-y-[8%]");

    professionals.classList.add("top-[-320%]");
    textBg3D.classList.add("translate-y-[14%]");
    mount.classList.add("translate-y-[-15%]");
    grass.classList.add("translate-y-[11%]");
  } else {
    professionals.classList.remove("top-[-320%]");
    textBg3D.classList.remove("translate-y-[14%]");
    mount.classList.remove("translate-y-[-15%]");
    grass.classList.remove("translate-y-[11%]");
  }
  if (st > vhSite * 14.25) {
    professionals.classList.remove("top-[-320%]");
    textBg3D.classList.remove("translate-y-[14%]");
    mount.classList.remove("translate-y-[-15%]");
    grass.classList.remove("translate-y-[11%]");

    professionals.classList.add("top-[-330%]");
    textBg3D.classList.add("translate-y-[15%]");
    mount.classList.add("translate-y-[-17%]");
    grass.classList.add("translate-y-[14%]");
  } else {
    professionals.classList.remove("top-[-330%]");
    textBg3D.classList.remove("translate-y-[15%]");
    mount.classList.remove("translate-y-[-17%]");
    grass.classList.remove("translate-y-[14%]");
  }
  if (st > vhSite * 14.5) {
    professionals.classList.remove("top-[-330%]");
    textBg3D.classList.remove("translate-y-[15%]");
    mount.classList.remove("translate-y-[-17%]");
    grass.classList.remove("translate-y-[14%]");

    professionals.classList.add("top-[-350%]");
    textBg3D.classList.add("translate-y-[15%]");
    mount.classList.add("translate-y-[-19%]");
    grass.classList.add("translate-y-[16%]");
  } else {
    professionals.classList.remove("top-[-350%]");
    textBg3D.classList.remove("translate-y-[15%]");
    mount.classList.remove("translate-y-[-19%]");
    grass.classList.remove("translate-y-[16%]");
  }
  if (st > vhSite * 14.75) {
    footer.classList.remove("translate-y-[-10%]");
    professionals.classList.remove("top-[-350%]");
    grass.classList.remove("translate-y-[16%]");
    professionals.classList.add("top-[-370%]");

    grass.classList.add("translate-y-[18%]");
    footer.classList.add("translate-y-[-14%]");
  } else {
    professionals.classList.remove("top-[-370%]");
    grass.classList.remove("translate-y-[18%]");
    footer.classList.remove("translate-y-[-14%]");
  }
  if (st > vhSite * 15) {
    footer.classList.remove("translate-y-[-10%]");
    professionals.classList.remove("top-[-370%]");
    footer.classList.add("translate-y-[-12%]");
    professionals.classList.add("top-[-390%]");
  } else {
    footer.classList.remove("translate-y-[-12%]");
    professionals.classList.remove("top-[-390%]");
  }
  if (st > vhSite * 15.25) {
    professionals.classList.remove("top-[-390%]");
    professionals.classList.add("top-[-400%]");
  } else {
    professionals.classList.remove("top-[-400%]");
  }
  if (st > vhSite * 15.5) {
    professionals.classList.remove("top-[-400%]");
    professionals.classList.add("top-[-410%]");
  } else {
    professionals.classList.remove("top-[-410%]");
  }
  if (st > vhSite * 15.75) {
    professionals.classList.remove("top-[-410%]");
    professionals.classList.add("top-[-420%]");
  } else {
    professionals.classList.remove("top-[-420%]");
  }
  // if (st > vhSite * 16) {
  //   professionals.classList.remove("top-[-430%]");
  //   professionals.classList.add("top-[-440%]");
  // } else {
  //   professionals.classList.remove("top-[-440%]");
  // }
});
