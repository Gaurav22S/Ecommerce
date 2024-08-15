// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');

    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');

    })
}
/*---cursor*/
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["90deg", "#ffb56b", "#f39060", "#e16b5c", "#ca485c", "#ac255e", "#870160", "#5b0060", "#1f005c"]
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index% colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

  circles.forEach(function (circle) {
    circle.style.left = coords.x - 12 + "px";
    circle.style.top = coords.y - 12 + "px";
  });

});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
  requestAnimationFrame(animateCircles);
}

animateCircles();