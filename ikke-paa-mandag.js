console.log("ikke på mandag!");


let kalenderDato = document.getElementById("kalender").required = true;
let kalenderTid = document.getElementById("tid").required = true;

document.addEventListener('DOMContentLoaded', function() {
    var kalender = document.getElementById('kalender');
    var advarsel = document.getElementById('ikke-mandag');

    kalender.addEventListener('change', function() {
        var valgtDato = new Date(this.value);
        var dag = valgtDato.getDay(); // Søndag = 0, Mandag = 1, ..., Lørdag = 6

        if (dag === 1) { // Sjekker om den valgte dagen er mandag
            advarsel.style.display = 'block'; // Viser advarselsteksten
            this.value = ''; // Tilbakestiller datofeltet, valgfritt
        } else {
            advarsel.style.display = 'none'; // Skjuler advarselsteksten hvis det ikke er mandag
        }
    });
});

