document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll('a.fade-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = e.target.href;

            document.body.classList.remove("fade-in");

            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        });
    });
});
