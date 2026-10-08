/* =========================================================
   BREWLAB ABOUT JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-intro, " +
            ".about-story, " +
            ".about-stats, " +
            ".values-section, " +
            ".approach-section, " +
            ".mission-section"
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const footer =
        document.querySelector(".footer-bottom p");


    if (footer) {

        footer.textContent =
            `© ${new Date().getFullYear()} BrewLab. Crafted for coffee people.`;

    }

});