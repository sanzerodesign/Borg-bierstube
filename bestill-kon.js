// er lagt inn

const subTextKnapp = document.getElementById("submit-bestilling");
const subImgKnapp = document.getElementById("img-knapp");

function updateImageText(element, imageElement, srcOverSubmitt, srcOutSubmitt) {
    element.addEventListener('mouseover', () => {
        imageElement.src = srcOverSubmitt;
      
        element.style.color = "#aaa";
    });

    element.addEventListener('mouseout', () => {
        imageElement.src = srcOutSubmitt;
       
        element.style.color = "#212b2c";
    });
}

const srcOverSubmitt = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e45c242322be12b7779956_small-arrow-grey.svg";
const srcOutSubmitt = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65bbfc34808ba2f8583d7083_arrow-dark.svg";

// Oppdater bilde og tekst ved mouseover/mouseout for knappen
updateImageText(subTextKnapp, subImgKnapp, srcOverSubmitt, srcOutSubmitt);



// er lagt inn

// SoMe oppdater iconer


const soMeLinks = document.querySelectorAll(".some-linken, .some-link");

const soMeLinkImgOn = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e45c242322be12b7779956_small-arrow-grey.svg";
const soMeLinkImgOff = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65bbfc34808ba2f8583d7083_arrow-dark.svg";

function updateSoMeText(linkElement, soMeLinkImgOn, soMeLinkImgOff) {
    linkElement.addEventListener('mouseover', function() {
        const imageElement = this.querySelector(".arrow-symbol");
        if (imageElement) {
            imageElement.src = soMeLinkImgOn;
        }
    });

    linkElement.addEventListener('mouseout', function() {
        const imageElement = this.querySelector(".arrow-symbol");
        if (imageElement) {
            imageElement.src = soMeLinkImgOff;
        }
    });
}

soMeLinks.forEach(link => {
    updateSoMeText(link, soMeLinkImgOn, soMeLinkImgOff);
});


