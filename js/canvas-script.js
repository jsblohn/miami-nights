let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight - 200;

let canvas = document.getElementById("theCanvas");
canvas.setAttribute("width", screenWidth);
canvas.setAttribute("height", screenHeight);

let context = canvas.getContext("2d");
context.globalCompositeOperation = "source-over";

let grd = context.createLinearGradient(0, 0, screenWidth, screenHeight);
grd.addColorStop(0, "#fc0af8");
grd.addColorStop(1, "#fff94f");
context.fillStyle = grd;
context.fillRect(0, 0, screenWidth, screenHeight);

window.onload = () => {
  drawImage1();
}

let img;

function drawImage1() {
  img = new Image();
  img.src = "images/palm-tree300x311.png";
  img.addEventListener("load", drawImage2);
}

function drawImage2() {
  context.drawImage(img, 0, screenHeight - 311, 300, 311);
}

window.onresize = () => {
  context.scale(1, 1);
}
