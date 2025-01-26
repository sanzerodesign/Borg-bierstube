/*

document.addEventListener('DOMContentLoaded', function() {

    console.log('Scrollable height:', document.documentElement.scrollHeight);
    console.log('Window height:', window.innerHeight);

    const video = document.getElementById('video');
    const introText = document.getElementById('introText');
    const textElements = [document.getElementById('text1'), document.getElementById('text2'), document.getElementById('text3'), document.getElementById('text4')];

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function adjustVideoPlayback(scrollPos) {
        const scrollFraction = scrollPos / (document.documentElement.scrollHeight - window.innerHeight);
        video.currentTime = video.duration * scrollFraction;
    }

    function displayText(scrollPos) {
        // Introtext vises først og skjules når brukeren scroller til en bestemt posisjon
        introText.style.opacity = scrollPos < 5000 ? '1' : '0';
        introText.style.visibility = scrollPos < 5000 ? 'visible' : 'hidden';

        console.log(scrollPos)

        const textPositions = [{ start: 1000, end: 1700 }, { start: 2800, end: 4000 }, { start: 4800, end: 5300 }, { start: 6500, end: 8000 }];

        textElements.forEach((textElement, index) => {
            const { start, end } = textPositions[index];
            const isVisible = scrollPos >= start && scrollPos < end;

            textElement.style.opacity = isVisible ? '1' : '0';
            textElement.style.visibility = isVisible ? 'visible' : 'hidden';
        });
    }

    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;


        if (!ticking) {
            window.requestAnimationFrame(function() {
                adjustVideoPlayback(lastKnownScrollPosition);
                displayText(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
});

*/

/*
document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('introText');

    // Sørger for at introText er skjult ved initial lasting
    introText.style.opacity = '0';
    introText.style.visibility = 'hidden';

    function handleScroll() {
        const scrollPos = window.scrollY;

        // Logger den nåværende scroll-posisjonen for debugging
        console.log("Current scroll position:", scrollPos);

        // Oppdaterer introText basert på scrollPos
        if (scrollPos < 920) {
            introText.style.opacity = '0';
            introText.style.visibility = 'hidden';
        } else {
            introText.style.opacity = '1';
            introText.style.visibility = 'visible';
        }
    }

    // Legger til en event listener for scroll-eventen
    window.addEventListener('scroll', handleScroll);
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {

    console.log('Scrollable height:', document.documentElement.scrollHeight);
    console.log('Window height:', window.innerHeight);

    const video = document.getElementById('video');
    const introText = document.getElementById('introText');
    const textElements = [document.getElementById('text1'), document.getElementById('text2'), document.getElementById('text3'), document.getElementById('text4')];

    // Sørger for at introText er skjult ved initial lasting
    introText.style.opacity = '0';
    introText.style.visibility = 'hidden';

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function adjustVideoPlayback(scrollPos) {
        const scrollFraction = scrollPos / (document.documentElement.scrollHeight - window.innerHeight);
        video.currentTime = video.duration * scrollFraction;
    }

    function displayText(scrollPos) {
        // Oppdaterer introText basert på scrollPos
        introText.style.opacity = scrollPos < 720 ? '0' : '1';
        introText.style.visibility = scrollPos < 720 ? 'hidden' : 'visible';

        // Logger den nåværende scroll-posisjonen
        console.log(scrollPos);

        // Definerer posisjoner hvor andre tekstene skal vises
        const textPositions = [{ start: 3800, end: 16050 }, { start: 20832, end: 31528 }, { start: 35830, end: 44160 }, { start: 46917, end: 52600 }];

        textElements.forEach((textElement, index) => {
            const { start, end } = textPositions[index];
            const isVisible = scrollPos >= start && scrollPos < end;

            textElement.style.opacity = isVisible ? '1' : '0';
            textElement.style.visibility = isVisible ? 'visible' : 'hidden';
        });
    }

    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                adjustVideoPlayback(lastKnownScrollPosition);
                displayText(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
});

*/

document.addEventListener('DOMContentLoaded', function() {

    const video = document.getElementById('video');
    const introText = document.getElementById('introText');
    const textElements = [
        document.getElementById('text1'),
        document.getElementById('text2'),
        document.getElementById('text3'),
        document.getElementById('text4')
    ];

    introText.style.opacity = '0';
    introText.style.visibility = 'hidden';

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function adjustVideoPlayback(scrollPos) {
        const scrollFraction = scrollPos / (document.documentElement.scrollHeight - window.innerHeight);
        video.currentTime = video.duration * scrollFraction;
    }

    function displayText(scrollPos) {
        const videoBounds = video.getBoundingClientRect();
        const relativeScrollPos = scrollPos - videoBounds.top;

        if (relativeScrollPos >= 0 && relativeScrollPos < 52600) {
            introText.style.opacity = relativeScrollPos < 720 ? '0' : '1';
            introText.style.visibility = relativeScrollPos < 720 ? 'hidden' : 'visible';
        } else {
            // Gjør introText usynlig hvis relativeScrollPos er utenfor grensene
            introText.style.opacity = '0';
            introText.style.visibility = 'hidden';
        }

        textElements.forEach((textElement, index) => {
            // Definerer posisjoner hvor tekstene skal vises basert på videoens relativ posisjon
            const textPositions = [{ start: 3800, end: 16050 }, { start: 20832, end: 31528 }, { start: 35830, end: 44160 }, { start: 46917, end: 52600 }];
            const { start, end } = textPositions[index];
            const isVisible = relativeScrollPos >= start && relativeScrollPos < end;

            textElement.style.opacity = isVisible ? '1' : '0';
            textElement.style.visibility = isVisible ? 'visible' : 'hidden';
        });
    }

    window.addEventListener('scroll', function() {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                adjustVideoPlayback(lastKnownScrollPosition);
                displayText(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });
});



