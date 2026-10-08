/* =========================================================
   BREWLAB HOME JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro-section, " +
        ".featured-section, " +
        ".story-section, " +
        ".features-section, " +
        ".numbers-section, " +
        ".home-cta"
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image");


    if (hero && heroImage) {

        hero.addEventListener("mousemove", event => {

            if (window.innerWidth <= 700) {
                return;
            }


            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;


            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;


            heroImage.style.transform =
                `scale(1.06) translate(${x}px, ${y}px)`;

        });


        hero.addEventListener("mouseleave", () => {

            heroImage.style.transform =
                "scale(1.03)";

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const footerTexts =
        document.querySelectorAll(".footer-bottom p:first-child");


    const currentYear =
        new Date().getFullYear();


    footerTexts.forEach(footerText => {

        footerText.textContent =
            `© ${currentYear} BrewLab. Crafted for coffee people.`;

    });

});