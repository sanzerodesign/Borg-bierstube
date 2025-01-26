console.log("Sanzero Designbyrå! liveserver 5500")
// er lagt inn
// Meny Drikke og Mat
const foodBtn = document.getElementById("btn-mat");
const drinkBtn = document.getElementById("btn-drikke"); 
const colFood = document.getElementById("coll-mat-forside");
const colDrink = document.getElementById("coll-drikke-forside");


foodBtn.addEventListener("click", () => {
    colFood.style.display = "block"; // Viser mat kolonnen
    colDrink.style.display = "none"; // Skjuler drikke kolonnen
});

drinkBtn.addEventListener("click", () => {
    colFood.style.display = "none"; // Skjuler mat kolonnen
    colDrink.style.display = "block"; // Viser drikke kolonnen
});

