// er lagt inn

/* New Code */

// Objekt med URLer til bilder
const bakgrunnsBildeURLer = {
  "info-cell-02-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d36b80979f7943fbd61d53_Meny-borg-bierstube-0n.jpg",
  "info-cell-03-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d36f2d423eed33f441ed75_planke-borg-bierstube-On.jpg",
  "info-cell-04-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4dd2b135d8a0f1243e3e1_kart-on.jpg",
  "info-cell-02-off": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4d59c1a4ca5586e9fa9c8_Meny-borg-bierstube-0ff-01.jpg",
  "info-cell-03-off": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4d5d269b921c22adcf01a_planke-borg-bierstube-0ff.jpg",
  "info-cell-04-off": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4dd7ee2ab7fd7c9c80d0c_kart-off.jpg"
};

// Funksjon for å forhåndslaste bilder
function prelastBilder(bildeURLer) {
  Object.values(bildeURLer).forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Kaller funksjonen for å forhåndslaste bildene når siden lastes
document.addEventListener("DOMContentLoaded", () => prelastBilder(bakgrunnsBildeURLer));

function oppdaterBakgrunnsbilde(divId, nyBildeUrl) {
  const divElement = document.getElementById(divId);
  if (divElement) {
    divElement.style.transition = 'background-image 300ms ease-in-out';
    divElement.style.backgroundImage = `url('${nyBildeUrl}')`;
  }
}

function visInfoCellOff() {
  const divElOn = document.getElementById("info-cell-01-on");
  const divElOff = document.getElementById("info-cell-01-off");
  if (divElOn && divElOff) {
    divElOn.style.display = "none";
    divElOff.style.display = "flex";
  }
}

function skjulInfoCellOff() {
  const divElOn = document.getElementById("info-cell-01-on");
  const divElOff = document.getElementById("info-cell-01-off");
  if (divElOn && divElOff) {
    divElOn.style.display = "flex";
    divElOff.style.display = "none";
  }
}

const cellTwoNotActive = document.getElementById("info-cell-02-on");
const cellThreeNotActive = document.getElementById("info-cell-03-on");
const cellFourNotActive = document.getElementById("info-cell-04-on");

cellTwoNotActive.addEventListener("mouseover", () => {
  oppdaterBakgrunnsbilde("info-cell-02-on", bakgrunnsBildeURLer["info-cell-02-on"]);
});

cellTwoNotActive.addEventListener("mouseleave", () => {
  oppdaterBakgrunnsbilde("info-cell-02-on", bakgrunnsBildeURLer["info-cell-02-off"]);
});

cellThreeNotActive.addEventListener("mouseover", () => {
  oppdaterBakgrunnsbilde("info-cell-03-on", bakgrunnsBildeURLer["info-cell-03-on"]);
});

cellThreeNotActive.addEventListener("mouseleave", () => {
  oppdaterBakgrunnsbilde("info-cell-03-on", bakgrunnsBildeURLer["info-cell-03-off"]);
});

cellFourNotActive.addEventListener("mouseover", () => {
  oppdaterBakgrunnsbilde("info-cell-04-on", bakgrunnsBildeURLer["info-cell-04-on"]);
});

cellFourNotActive.addEventListener("mouseleave", () => {
  oppdaterBakgrunnsbilde("info-cell-04-on", bakgrunnsBildeURLer["info-cell-04-off"]);
});

cellTwoNotActive.addEventListener("mouseover", visInfoCellOff);
cellTwoNotActive.addEventListener("mouseleave", skjulInfoCellOff);
cellThreeNotActive.addEventListener("mouseover", visInfoCellOff);
cellThreeNotActive.addEventListener("mouseleave", skjulInfoCellOff);
cellFourNotActive.addEventListener("mouseover", visInfoCellOff);
cellFourNotActive.addEventListener("mouseleave", skjulInfoCellOff);

let arrowImageLink = document.querySelector(".image-10");
const textFoodMenu = document.querySelector(".text-gold");
const holderButton = document.querySelector(".holder-meny__btn._4.w-inline-block");

function upDateImage() {
  textFoodMenu.style.color = "#AAAAAA";
  arrowImageLink.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e24cd4d6d1ac9381f4cdf3_small-arrow.svg";
}

function reDateImage() {
  textFoodMenu.style.color = "#B08C5A";
  arrowImageLink.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65b449c2b2bd3ef3c91ee896_arrow-gold__up-medium.svg";
}

holderButton.addEventListener('mouseover', upDateImage);
holderButton.addEventListener('mouseout', reDateImage);




/*
// Objekt med URLer til bilder
const bakgrunnsBildeURLer  = {
  "info-cell-02-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d36b80979f7943fbd61d53_Meny-borg-bierstube-0n.jpg",
  "info-cell-03-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d36f2d423eed33f441ed75_planke-borg-bierstube-On.jpg",
  "info-cell-04-on": "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4dd2b135d8a0f1243e3e1_kart-on.jpg",
};

function oppdaterBakgrunnsbilde(divId, nyBildeUrl) {
  const divElement = document.getElementById(divId);
  if (divElement) {
      divElement.style.transition = 'background-image 300ms ease-in-out';
      divElement.style.backgroundImage = `url('${nyBildeUrl}')`;
  }
}

// Funksjon for å håndtere mouseover
function visInfoCellOff() {
  const divElOn = document.getElementById("info-cell-01-on");
  const divElOff = document.getElementById("info-cell-01-off");
  if (divElOn && divElOff) {
      divElOn.style.display = "none";
      divElOff.style.display = "flex";
  }
}

// Funksjon for å håndtere mouseleave
function skjulInfoCellOff() {
  const divElOn = document.getElementById("info-cell-01-on");
  const divElOff = document.getElementById("info-cell-01-off");
  if (divElOn && divElOff) {
      divElOn.style.display = "flex";
      divElOff.style.display = "none";
  }
}

const cellTwoNotActive = document.getElementById("info-cell-02-on");
const cellThreeNotActive = document.getElementById("info-cell-03-on");
const cellFourNotActive = document.getElementById("info-cell-04-on");

const arrowOneOn = document.getElementById("01-on");
const arrowOneOff = document.getElementById("01-off");
const arrowTwoOn = document.getElementById("02-on");
const arrowTwoOff = document.getElementById("02-off");
const arrowThreeOn = document.getElementById("03-on");
const arrowThreeOff = document.getElementById("03-off");
const arrowFourOn = document.getElementById("04-on");
const arrowFourOff = document.getElementById("04-off");

cellTwoNotActive.addEventListener("mouseover", () => {
  arrowOneOn.style.display = "none";
  arrowOneOff.style.display = "block";
  arrowTwoOn.style.display = "block";
  arrowTwoOff.style.display = "none";
  oppdaterBakgrunnsbilde("info-cell-02-on", bakgrunnsBildeURLer["info-cell-02-on"]);
});

cellTwoNotActive.addEventListener("mouseleave", () => {
  arrowOneOn.style.display = "block";
  arrowOneOff.style.display = "none";
  arrowTwoOff.style.display = "block";
  arrowTwoOn.style.display = "none";
  oppdaterBakgrunnsbilde("info-cell-02-on", "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4d59c1a4ca5586e9fa9c8_Meny-borg-bierstube-0ff-01.jpg");
});

cellThreeNotActive.addEventListener("mouseover", () => {
  arrowFourOn.style.display = "block";
  arrowFourOff.style.display = "none";
  arrowOneOn.style.display = "none";
  arrowOneOff.style.display = "block";
  oppdaterBakgrunnsbilde("info-cell-03-on", bakgrunnsBildeURLer["info-cell-03-on"]);
});

cellThreeNotActive.addEventListener("mouseleave", () => {
  arrowFourOn.style.display = "none";
  arrowFourOff.style.display = "block";
  arrowOneOn.style.display = "block";
  arrowOneOff.style.display = "none";
  oppdaterBakgrunnsbilde("info-cell-03-on", "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4d5d269b921c22adcf01a_planke-borg-bierstube-0ff.jpg");
});

cellFourNotActive.addEventListener("mouseover", () => {
  arrowThreeOff.style.display = "none";
  arrowThreeOn.style.display = "block";
  arrowOneOn.style.display = "none";
  arrowOneOff.style.display = "block";
  oppdaterBakgrunnsbilde("info-cell-04-on", bakgrunnsBildeURLer["info-cell-04-on"]);
});

cellFourNotActive.addEventListener("mouseleave", () => {
  arrowThreeOff.style.display = "block";
  arrowThreeOn.style.display = "none";
  arrowOneOn.style.display = "block";
  arrowOneOff.style.display = "none";
  oppdaterBakgrunnsbilde("info-cell-04-on", "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65d4dd7ee2ab7fd7c9c80d0c_kart-off.jpg");
});

cellTwoNotActive.addEventListener("mouseover", visInfoCellOff);
cellTwoNotActive.addEventListener("mouseleave", skjulInfoCellOff);
cellThreeNotActive.addEventListener("mouseover", visInfoCellOff);
cellThreeNotActive.addEventListener("mouseleave", skjulInfoCellOff);
cellFourNotActive.addEventListener("mouseover", visInfoCellOff);
cellFourNotActive.addEventListener("mouseleave", skjulInfoCellOff);




let arrowImageLink = document.querySelector(".image-10");
const textFoodMenu = document.querySelector(".text-gold");
const holderButton = document.querySelector(".holder-meny__btn._4.w-inline-block");

function upDateImage() {
  textFoodMenu.style.color = "#AAAAAA"
  arrowImageLink.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e24cd4d6d1ac9381f4cdf3_small-arrow.svg"
}

function reDateImage() {
  textFoodMenu.style.color = "#B08C5A"
  arrowImageLink.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65b449c2b2bd3ef3c91ee896_arrow-gold__up-medium.svg"
}

holderButton.addEventListener('mouseover', upDateImage);
holderButton.addEventListener('mouseout', reDateImage);


*/