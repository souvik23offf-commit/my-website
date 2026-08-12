// ================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // SMOOTH SCROLLING
    // ================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });


    // ================================
    // ACTIVE NAVIGATION
    // ================================

    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll("nav a");

    function updateActiveMenu() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveMenu);

    updateActiveMenu();


    // ================================
    // SCROLL REVEAL ANIMATION
    // ================================

    const revealElements = document.querySelectorAll(
        "#developer .container, #engineer .container, #teacher .container, #about .container, #contact .container"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });


    // ================================
    // DEVELOPER / ENGINEER / TEACHER
    // BUTTON ACTIONS
    // ================================

    const buttons = document.querySelectorAll(".cta");

    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // ================================
    // WELCOME MESSAGE
    // ================================

    console.log("Portfolio website loaded successfully!");
    console.log("Developer | Engineer | Teacher");


    // ================================
    // CURRENT YEAR
    // ================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});