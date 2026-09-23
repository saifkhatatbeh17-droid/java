let image = document.getElementById("image");
let circle = document.getElementById("circle");
let square = document.getElementById("square");

circle.onclick = function () {
    image.style.borderRadius = "50%";
};

square.onclick = function () {
    image.style.borderRadius = "0";
};