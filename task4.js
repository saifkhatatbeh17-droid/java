let text = document.getElementById("text");
let font = document.getElementById("font");
let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");

font.onchange = function () {
    text.style.fontFamily = font.value;
};

bold.onchange = function () {
    text.style.fontWeight = bold.checked ? "bold" : "normal";
};

italic.onchange = function () {
    text.style.fontStyle = italic.checked ? "italic" : "normal";
};

underline.onchange = function () {
    text.style.textDecoration = underline.checked ? "underline" : "none";
};