// // JavaScript Document
// const trilAfbeelding = document.getElementById('tril-afbeelding');

// trilAfbeelding.addEventListener('click', () => {
//     trilAfbeelding.classList.add('trillen');
    
//     // Na 1 seconde de trilklasse verwijderen
//     setTimeout(() => {
//         trilAfbeelding.classList.remove('trillen');
//     }, 1000);
// });

// const afbeeldingContainer = document.getElementById('image-container');
// const afbeelding1 = document.getElementById('afbeelding-1');
// const afbeelding2 = document.getElementById('afbeelding-2');

// let isAfbeelding1Zichtbaar = true;

// // afbeeldingContainer.addEventListener('click', () => {
// //     if (isAfbeelding1Zichtbaar) {
// //         afbeelding1.style.transform = 'rotateY(180deg)';
// //         afbeelding2.style.transform = 'rotateY(0deg)';
// //     } else {
// //         afbeelding1.style.transform = 'rotateY(0deg)';
// //         afbeelding2.style.transform = 'rotateY(180deg)';
// //     }

// //     isAfbeelding1Zichtbaar = !isAfbeelding1Zichtbaar;
// // });

var isAfbeelding1 = true;

function veranderAfbeelding() {
    var afbeelding = document.getElementById("afbeelding");

    if (isAfbeelding1) {
        afbeelding.src = "images/reveal cloe.png"; // Verander naar de andere afbeelding
    } else {
        afbeelding.src = "images/cloe before.png"; // Terug naar de oorspronkelijke afbeelding
    }

    isAfbeelding1 = !isAfbeelding1;
}

function toonTekstVak() {
    var tekstvak = document.getElementById("tekstvak");
    if (tekstvak.style.display === "none") {
        tekstvak.style.display = "block";
    } else {
        tekstvak.style.display = "none";
    }
}

function toonTekstVak() {
    var tekstvak = document.getElementById("tekstvak");
    if (tekstvak.style.display === "none") {
        tekstvak.style.display = "block";
    } else {
        tekstvak.style.display = "none";
    }
}

function toonTekstvak(knopNummer) {
    var tekstvak = document.getElementById("tekstvak");
    tekstvak.value = ""; // Wis de inhoud van het tekstvak

    var tekstvakContainer = document.getElementById("tekstvak-container");
    if (tekstvakContainer.style.display === "none") {
        tekstvakContainer.style.display = "block";
    } else {
        tekstvakContainer.style.display = "none";
    }

    // Voeg een bericht toe afhankelijk van welke knop is geklikt
    switch (knopNummer) {
        case 1:
            tekstvak.value = "hallo hoe is het ";
            break;
        case 2:
            tekstvak.value = "yoooo";
            break;
        case 3:
            tekstvak.value = "babyyy";
            break;
        case 4:
            tekstvak.value = "jankiiieee";
            break;
        case 5:
            tekstvak.value = "hey babyyy";
            break;
        default:
            break;
    }
}
var isVideoZichtbaar = false; // Een variabele om bij te houden of de video zichtbaar is





