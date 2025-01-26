const linkMenuOpen = document.getElementById("link-meny");
const linkAnsatteOpen = document.getElementById("link-ansatte");
const textMatenEl = document.getElementById("text-maten");
const textAnsatteEl = document.getElementById("text-ansatte");
const arrowMateneEl = document.getElementById("arrow-maten");
const arrowAnsatteEl = document.getElementById("arrow-ansatte");



console.log(linkMenuOpen);
console.log(linkAnsatteOpen);
console.log(textMatenEl);
console.log(textAnsatteEl);
console.log(arrowMateneEl);
console.log(arrowAnsatteEl);


/* Div maten */
function overFoodDivImage() {
    textMatenEl.style.color = "#AAAAAA"
    arrowMateneEl.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e2ed917dd42dead1b8a482_large-arrow.svg"
  }
  
  function awayFoodOverImage() {
    textMatenEl.style.color = "#B08C5A"
    arrowMateneEl.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65b449c244ad052dcd6685b5_arrow-gold__up-large.svg"
  }
  
  linkMenuOpen.addEventListener('mouseover', overFoodDivImage);
  linkMenuOpen.addEventListener('mouseout', awayFoodOverImage);

/* Div ansatte */

  function overAnsatteDivImage() {
    textAnsatteEl.style.color = "#AAAAAA"
    arrowAnsatteEl.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e2ed917dd42dead1b8a482_large-arrow.svg"
  }
  
  function awayAnsatteOverImage() {
    textAnsatteEl.style.color = "#B08C5A"
    arrowAnsatteEl.src = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65b449c244ad052dcd6685b5_arrow-gold__up-large.svg"
  }
  
  linkAnsatteOpen.addEventListener('mouseover', overAnsatteDivImage);
  linkAnsatteOpen.addEventListener('mouseout', awayAnsatteOverImage);

