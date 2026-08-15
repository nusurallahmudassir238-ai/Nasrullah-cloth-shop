// ==========================================
// NASRULLAH CLOTH SHOP
// JAVASCRIPT
// ==========================================


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===============================
// SMOOTH SCROLL
// ===============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 5, 5, 0.98)";

    } else {

        header.style.background =
            "rgba(8, 8, 8, 0.92)";
    }

});


// ===============================
// PRODUCT CARD ANIMATION
// ===============================

const products =
    document.querySelectorAll(".product-card");

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.1
    });


products.forEach(function (product) {

    product.style.opacity = "0";

    product.style.transform =
        "translateY(30px)";

    product.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(product);

});


// ===============================
// WHATSAPP CLICK MESSAGE
// ===============================

const whatsappButtons =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            "Opening Nasrullah Cloth Shop WhatsApp..."
        );

    });

});


// ===============================
// WELCOME MESSAGE
// ===============================

console.log(
    "Welcome to Nasrullah Cloth Shop!"
);
