// er lagt inn

let tempElement = document.getElementById("temp");
let tempSarp = tempElement.innerHTML;
let temperatur = Math.floor(Number(tempSarp));


// Oppdater elementets innhold
tempElement.textContent = temperatur + "°C";