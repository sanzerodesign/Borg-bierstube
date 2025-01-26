// er lagt inn


// Meny av linker
const menyOff = document.getElementById("menu-off");
const menyDivWindow = document.getElementById("menu-div");
const symbolOff = document.getElementById("ham-off");
const symbolOn = document.getElementById("ham-on");

// linker i meny
const linkHvorEl = document.getElementById("menu-btn-hvor");
const linkMenyEl = document.getElementById("menu-btn-meny");
const linkBestillEl = document.getElementById("menu-btn-bestill");
const imgArrowEl = document.getElementById("link-image-arrow");
const imgArrowEl2 = document.getElementById("link-image-arrow2");
const imgArrowEl3 = document.getElementById("link-image-arrow3");


console.log(linkHvorEl);
console.log(linkMenyEl);
console.log(linkBestillEl); 

menyDivWindow.style.opacity = '0';
menyDivWindow.style.transition = 'opacity 300ms ease-in-out, background-image 300ms ease-in-out';
menyDivWindow.style.display = 'none'; // Start med å gjøre elementet usynlig

menyOff.addEventListener("click", () => {
    if (menyDivWindow.style.display === 'none') {
        menyDivWindow.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Forhindre scrolling på body
        setTimeout(() => { menyDivWindow.style.opacity = '1'; }, 10); // Liten forsinkelse før endring av opacity

        symbolOff.style.display = "none";
        symbolOn.style.display = "block";
    } else {
        menyDivWindow.style.opacity = '0';
        setTimeout(() => {
            menyDivWindow.style.display = 'none';
            document.body.style.overflow = 'auto'; // Gjenopprett scrolling på body
        }, 300); // Venter til overgangen er fullført

        symbolOff.style.display = "block";
        symbolOn.style.display = "none";
    }
});

//funksjon linker

function updateImage(element, imageElement, srcOver, srcOut) {
    element.addEventListener('mouseover', () => {
        imageElement.src = srcOver;
    });
    element.addEventListener('mouseout', () => {
        imageElement.src = srcOut;
    });
}

const srcOver = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e44b9db227bef9ebd54bab_small-arrow-brown.svg";
const srcOut = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65b449c2b2bd3ef3c91ee896_arrow-gold__up-medium.svg";

// Oppdater bilde ved mouseover/mouseout for hver link
updateImage(linkHvorEl, imgArrowEl, srcOver, srcOut);
updateImage(linkMenyEl, imgArrowEl2, srcOver, srcOut);
updateImage(linkBestillEl, imgArrowEl3, srcOver, srcOut);




// Gjør om alle img-navn til alt tag.
let images = document.getElementsByTagName('img');
// loop
for (let i = 0; i < images.length; i++) {
// for each image
let image = images[i];
// grab the data from the source attribute and split it up at each / symbol and grab the last one
let imageName = image.src.split('/').pop();
// add the source data to alt, remove names like .png, .jpg, .webp from name, remove _ and - from name,
image.alt = imageName.replace(/\.(png|jpg|webp|svg)$/, '').replace(/[_-]/g, ' ');
}

