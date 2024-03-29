var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColors = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Make it so that the color inputs match the background generated on the first page
setGradient();

// Bonus... create a button that generates random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
}

randomColors.addEventListener("click", randomColor);

