/* ==========================================
   Retirement Invitation
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }, 1200);

    });

});


/* ==========================================
   Scroll Progress Bar
========================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent =
        (scrollTop / height) * 100;

    progressBar.style.width = percent + "%";

});


/* ==========================================
   Back To Top Button
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   Scroll Reveal Animation
========================================== */

const sections =
    document.querySelectorAll("section");

const reveal = () => {

    const trigger =
        window.innerHeight * 0.82;

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
   Card Hover Animation
========================================== */

const cards =
    document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});


/* ==========================================
   Button Ripple Effect
========================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple =
            document.createElement("span");

        ripple.className = "ripple";

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            (e.clientX - rect.left) + "px";

        ripple.style.top =
            (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================================
   Hero Fade Animation
========================================== */

const hero =
    document.querySelector(".hero-card");

hero.animate([

    {
        opacity: 0,
        transform: "translateY(50px)"
    },

    {
        opacity: 1,
        transform: "translateY(0)"
    }

], {

    duration: 1200,

    easing: "ease-out"

});


/* ==========================================
   Floating Loader Icon
========================================== */

const loaderIcon =
    document.querySelector(".loader-icon");

if (loaderIcon) {

    let angle = 0;

    setInterval(() => {

        angle += 1;

        loaderIcon.style.transform =
            `translateY(${Math.sin(angle / 10) * 8}px)`;

    }, 30);

}


/* ==========================================
   Decorative Fade
========================================== */

const papers =
    document.querySelectorAll(".paper");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.animate([

                    {
                        opacity: 0,
                        transform: "translateY(40px)"
                    },

                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }

                ], {

                    duration: 900,

                    fill: "forwards"

                });

            }

        });

    }, {

        threshold: 0.15

    });

papers.forEach(paper => {

    observer.observe(paper);

});


/* ==========================================
   Current Year
========================================== */

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} | વયનિવૃત્તિ સન્માન સમારોહ`;

}


/* ==========================================
   Console Message
========================================== */

console.log("%cવયનિવૃત્તિ સન્માન સમારોહ",
"color:#7A1E1E;font-size:22px;font-weight:bold;");

console.log("%cDeveloped with ❤",
"color:#D4AF37;font-size:14px;");
