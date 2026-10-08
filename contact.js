/* =========================================================
   BREWLAB CONTACT JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const form =
        document.getElementById("contactForm");


    const message =
        document.getElementById("formMessage");


    if (form) {

        form.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const subject =
                document.getElementById("subject").value.trim();


            const userMessage =
                document.getElementById("message").value.trim();


            /* Basic validation */

            if (
                !name ||
                !email ||
                !subject ||
                !userMessage
            ) {

                message.textContent =
                    "Please fill in all fields.";

                message.className =
                    "form-message error";

                return;

            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                message.textContent =
                    "Please enter a valid email address.";

                message.className =
                    "form-message error";

                return;

            }


            /* Success */

            message.textContent =
                `Thanks ${name}! Your message has been received.`;

            message.className =
                "form-message success";


            form.reset();

        });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".contact-section, .contact-cta"
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