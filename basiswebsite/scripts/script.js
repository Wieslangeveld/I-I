// JavaScript Document
const trilAfbeelding = document.getElementById('tril-afbeelding');

trilAfbeelding.addEventListener('click', () => {
    trilAfbeelding.classList.add('trillen');
    
    // Na 1 seconde de trilklasse verwijderen
    setTimeout(() => {
        trilAfbeelding.classList.remove('trillen');
    }, 1000);
});

const afbeeldingContainer = document.getElementById('image-container');
const afbeelding1 = document.getElementById('afbeelding-1');
const afbeelding2 = document.getElementById('afbeelding-2');

let isAfbeelding1Zichtbaar = true;

afbeeldingContainer.addEventListener('click', () => {
    if (isAfbeelding1Zichtbaar) {
        afbeelding1.style.transform = 'rotateY(180deg)';
        afbeelding2.style.transform = 'rotateY(0deg)';
    } else {
        afbeelding1.style.transform = 'rotateY(0deg)';
        afbeelding2.style.transform = 'rotateY(180deg)';
    }

    isAfbeelding1Zichtbaar = !isAfbeelding1Zichtbaar;
});

