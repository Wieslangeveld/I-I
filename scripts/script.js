
// nieuwe knoppen (tekst) linken van functie 
var knop1 = document.getElementById("knop1");

knop1.onclick = showContent1;

var knop2 = document.getElementById("knop2");

knop2.onclick = showContent2;

var knop3 = document.getElementById("knop3");

knop3.onclick = showContent3;

var knop4 = document.getElementById("knop4");

knop4.onclick = showContent4;

var knop5 = document.getElementById("knop5");

knop4.onclick = showContent5;


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

// nieuwe knoppen linken van content 

function showContent1() {
  const content = document.getElementById("content");
  content.style.display = "block";
  {
    content.innerHTML = `
    <p>Deze film  is uitgekomen in 2006.
    In deze film gaan de Bratz zelf kleding ontwerpen voor een modeshow. dit is helemaal Cloe haar Ding. ze ontwerpt kleding en is uiteindelijk zo zeker van der zaak dat ze zelf het podium op gaat om het aan iedereen te laten zien.</p>
  `;
  }
};

function showContent2() {
  const content = document.getElementById("content");
  content.style.display = "block";
  {
    content.innerHTML = `
    <p>Bratz de Sleepover is uitgekomen in 2007.
    in deze film is Cloe jong. zon 7 jaar en heeft ze haar eerste slaap feestje. Ze heeft leuke vriendinnen en nog niks om zich zorgen over te maken. De kinderlijke onwetendheid straalt eraf en haar ouders hebben haar kleding voor haar klaargelegd en ingepakt.
    Hierom is haar zelfvertrouwen in deze film erg hoog.</p>
  `;
  }
};

function showContent3() {
  const content = document.getElementById("content");
  content.style.display = "block";
  {
    content.innerHTML = `
    <p>Deze film  is uitgekomen in 2007.
    In deze film zitten de meiden in hun laatste jaar van high school. ze zijn de populaire meiden die er altijd leuk uitzien. vooral cloe. Cloe heeft een pratende kleding kast vol spullen en ze zal nooit zonder leuke kleding naar school gaan. Ze is super zelf verzekerd en mega populair en dat is terug te zien in de kleding en haar gedrag.</p>
  `;
  }
};

function showContent4() {
  const content = document.getElementById("content");
  content.style.display = "block";
  {
    content.innerHTML = `
    <p>Deze film  is uitgekomen in 2006. 
    in deze film is Cloe al veel zekerder geworden van zichzelf. Op de middelbare school is ze nog steeds samen met de jonge en heeft ze nog steeds de goede band met haar vriendinnen. Ze wordt zelfs een beetje arrogant. Ze draagt veel sieraden en veel blote kleding. In deze film gaan de meiden een slechterik bestrijden. In deze film draagt ze ook veel rood. dit staat voor zelfverzekerdheid</p>
  `;
  }
};

function showContent5() {
  const content = document.getElementById("content");
  content.style.display = "block";
  {
    content.innerHTML = `
    <p>Deze film  is uitgekomen in 2004.Deze film zijn de Bratz op de middelbare school opzoek naar een date voor het gala. ze zitten hier net op high school en zijn dan dus ongeveer 14 jaar .
     Cloe is hier erg onzeker ze draagt wat haar vriendinnen leuk vinden maar wel erg bedekt en sombere kleuren. Ze is in haar vriendinnengroep zelf verzekerd maar richting jongens niet. Haar zelfverzekerdheid krijgt een boost omdat ze op het einde toch wel gevraagd wordt voor Prom.</p>
  `;
  displayedImage.src = "images/genie magic meter.png";
  }
};



// testen 
function showImage(buttonNumber) {
    const imageContainer = document.getElementById("image-container");
    const displayedImage = document.getElementById("displayed-image");
    imageContainer.style.display = "block";
  
    switch (buttonNumber) {
      case 1:
        displayedImage.src = "images/diamondz meter .png";
        break;
      case 2:
        displayedImage.src = "images/Sleepover meter .png";
        break;
      case 3:
        displayedImage.src = 'images/bratz movie.png';
        break;
      case 4:
        displayedImage.src = 'images/starrin meter .png';
        break;
      case 5:
        displayedImage.src = "images/genie magic meter.png";
        break;
      default:
        imageContainer.style.display = "none";
        displayedImage.src = "none";
    }
  }
  
  
  
  
  

