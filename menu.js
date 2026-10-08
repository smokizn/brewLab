/* =========================================================
   BREWLAB MENU JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MENU FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    const menuCards =
        document.querySelectorAll(".menu-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {


            /* Remove active state */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Add active state */

            button.classList.add("active");


            const filter =
                button.dataset.filter;


            menuCards.forEach(card => {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hide");

                } else {

                    card.classList.add("hide");

                }

            });

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".menu-intro, .menu-category, .menu-cta"
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
                threshold: 0.1
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