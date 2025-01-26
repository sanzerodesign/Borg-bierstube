// er lagt inn
document.addEventListener("DOMContentLoaded", function() {
    // Henter datoEvent fra en div med formatet "DD.MM.YYYY"
    let datoEventText = document.getElementById("event-count").innerText;

    // Splitter teksten til komponenter og konverterer dem til tall
    let parts = datoEventText.split(".");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);
    // Sjekker og korrigerer årstallet
    let year = parseInt(parts[2], 10);
    if (year < 100) {
        year += 2000;
    }

    // Oppretter datoEvent som et Date-objekt med korrigert format
    let datoEvent = new Date(year, month - 1, day);

    // Får dagens dato, nullstilt til midnatt
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    // Beregner differansen i millisekunder
    let differanseMs = datoEvent.getTime() - today.getTime();

    // Beregner differanse i dager
    let differanseDager = Math.ceil(differanseMs / (1000 * 60 * 60 * 24));

    let resultatElement = document.getElementById("result");

    // Viser differansen
    if (differanseDager > 0) {
        resultatElement.innerText = `${differanseDager}`;
    } else if (differanseDager === 0) {
        resultatElement.innerText = "0";
    } else {
        resultatElement.innerText = "-1";
    }
});

