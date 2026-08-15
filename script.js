// ==========================================
// NASRULLAH CLOTH - JAVASCRIPT
// ==========================================


// ==========================================
// 1. PAGE LOAD MESSAGE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Nasrullah Cloth Website Loaded Successfully!");
});


// ==========================================
// 2. CONTACT FORM
// ==========================================

function sendMessage() {

    const name = document.querySelector(
        '.contact-box input[type="text"]'
    ).value.trim();

    const email = document.querySelector(
        '.contact-box input[type="email"]'
    ).value.trim();

    const phone = document.querySelectorAll(
        '.contact-box input[type="text"]'
    )[1].value.trim();

    const message = document.querySelector(
        '.contact-box textarea'
    ).value.trim();


    // Check empty fields

    if (name === "" || email === "" || phone === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }


    // Success message

    alert(
        "Thank you " +
        name +
        "!\n\n" +
        "Your message has been received by Nasrullah Cloth."
    );


    // Clear form

    document.querySelector(
        '.contact-box input[type="text"]'
    ).value = "";

    document.querySelector(
        '.contact-box input[type="email"]'
    ).value = "";

    document.querySelectorAll(
        '.contact-box input[type="text"]'
    )[1].value = "";

    document.querySelector(
        '.contact-box textarea'
    ).value = "";
}


// ==========================================
// 3. ORDER BUTTONS
// ==========================================

const orderButtons = document.querySelectorAll(
    ".product-info .btn"
);

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product = this
            .closest(".product")
            .querySelector("h3")
            .innerText;

        const price = this
            .closest(".product")
            .querySelector(".price")
            .innerText;

        alert(
            "Product Selected!\n\n" +
            "Product: " + product + "\n" +
            "Price: " + price + "\n\n" +
            "Please contact Nasrullah Cloth to complete your order."
        );

    });

});


// ==========================================
// 4. SMOOTH NAVIGATION
// ==========================================

const navigationLinks =
    document.querySelectorAll("nav a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const targetSection =
            document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// 5. CHANGE HEADER WHEN SCROLLING
// ==========================================

window.addEventListener("scroll", function () {

    const header =
        document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.35)";

    } else {

        header.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.2)";
    }

});


// ==========================================
// 6. PRODUCT HOVER EFFECT
// ==========================================

const products =
    document.querySelectorAll(".product");

products.forEach(function (product) {

    product.addEventListener("mouseenter", function () {

        this.style.cursor = "pointer";

    });

});


// ==========================================
// 7. CURRENT YEAR IN FOOTER
// ==========================================

const footer =
    document.querySelector("footer p");

if (footer) {

    const currentYear =
        new Date().getFullYear();

    footer.innerHTML =
        "© " +
        currentYear +
        ' <span>Nasrullah Cloth</span>. All Rights Reserved.';
}


// ==========================================
// 8. WHATSAPP ORDER
// ==========================================

const whatsappButton =
    document.querySelector(".whatsapp");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function () {

        console.log(
            "Opening Nasrullah Cloth WhatsApp..."
        );

    });

}
function likeProduct(button) {

    const span = button.querySelector("span");

    if (button.classList.contains("liked")) {

        button.classList.remove("liked");
        span.innerText = "Like";

    } else {

        button.classList.add("liked");
        span.innerText = "Liked ✓";

    }
}
