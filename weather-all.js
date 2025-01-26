let tempElementTwo = document.getElementById("temp");
let tempSarpTwo = tempElementTwo.innerHTML;
let temperaturTwo = Math.floor(Number(tempSarpTwo));

// Oppdater elementets innhold
tempElementTwo.textContent = temperaturTwo + "°C";




// Bruk et annet variabelnavn for det andre elementet
let tempElementFooter = document.getElementById("temp-footer");
let tempSarpFooter = tempElementFooter.innerHTML;
let temperaturFooter = Math.floor(Number(tempSarpFooter));

// Oppdater elementets innhold
tempElementFooter.textContent = temperaturFooter + "°C";




//footer some link
document.addEventListener('DOMContentLoaded', () => {
    const linkInsta = document.getElementById("link-some");
    const linkFace = document.getElementById("link-some-2");
    const linkLinkedin = document.getElementById("link-some-3");

    let instagramIconOn = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e49ad334d216f5a19a6f51_Icon-instagram-on.svg";
    let facebookIconOn = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e49ad39dfb1e57e73d9d46_facebook-on.svg";
    let linkedinIconOn = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65e49ad3a113437e30f3c8e7_LinkedIn_icon-on.png";

    let instagramIconOff = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65babd294d83dce0c7b9b297_insta.svg";
    let facebookIconOff = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65babd296cdb0960809ca774_face.svg";
    let linkedinIconOff = "https://uploads-ssl.webflow.com/659ddd640704ce377537882e/65babd297773bceaa871f862_linkedin.svg";

    const updateIcon = (linkElement, iconOn, iconOff) => {
        const imgElement = linkElement.querySelector('img'); // Assumes an <img> tag is inside each link
        if (!imgElement) return; // Exit if no img found

        linkElement.addEventListener('mouseover', () => {
            imgElement.src = iconOn;
        });

        linkElement.addEventListener('mouseout', () => {
            imgElement.src = iconOff;
        });
    };

    if (linkInsta) updateIcon(linkInsta, instagramIconOn, instagramIconOff);
    if (linkFace) updateIcon(linkFace, facebookIconOn, facebookIconOff);
    if (linkLinkedin) updateIcon(linkLinkedin, linkedinIconOn, linkedinIconOff);
});
