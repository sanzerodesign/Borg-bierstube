//er lagt inn

const firkatSymbolBus = document.getElementById("link-bus");
const firkatSymbolTog = document.getElementById("link-tog");
const firkatSymbolBil = document.getElementById("link-car");
const firkatSymbolRullestol = document.getElementById("link-rullestol");


const dotSymbolBus = document.getElementById("dot-bus");
const dotSymbolTog = document.getElementById("dot-train");
const dotSymbolBil = document.getElementById("dot-car");
const dotSymbolRullestol = document.getElementById("dot-rullestol");

const tekstInfo = document.getElementById("tekst-info-tog-bus");
const tekstInfoCar = document.getElementById("tekst-info-bil");


// Mouseenter and leave.

// Bus
firkatSymbolBus.addEventListener("mouseover", () => {
    dotSymbolBus.style.display = "block"
    tekstInfo.style.opacity = "1"
});

firkatSymbolBus.addEventListener("mouseleave", () => {
    dotSymbolBus.style.display = "none"
    tekstInfo.style.opacity = "0"
});

// Tog

firkatSymbolTog.addEventListener("mouseover", () => {
    dotSymbolTog.style.display = "block"
    tekstInfo.style.opacity = "1"
});

firkatSymbolTog.addEventListener("mouseleave", () => {
    dotSymbolTog.style.display = "none"
    tekstInfo.style.opacity = "0"
});

// Bil

firkatSymbolBil.addEventListener("mouseover", () => {
    dotSymbolBil.style.display = "block"
    tekstInfoCar.style.opacity = "1";

});

firkatSymbolBil.addEventListener("mouseleave", () => {
    dotSymbolBil.style.display = "none"
    tekstInfoCar.style.opacity = "0";
    
});

// Rullestol

firkatSymbolRullestol.addEventListener("mouseover", () => {
    dotSymbolRullestol.style.display = "block"
});

firkatSymbolRullestol.addEventListener("mouseleave", () => {
    dotSymbolRullestol.style.display = "none"
});
