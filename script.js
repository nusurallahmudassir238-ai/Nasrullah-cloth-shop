document.addEventListener("DOMContentLoaded", function () {
    console.log("Nasrullah Cloth Website Loaded Successfully!");
});

function sendMessage() {
    const name = document.querySelector('.contact-box input[type="text"]').value.trim();
    const email = document.querySelector('.contact-box input[type="email"]').value.trim();
    const phone = document.querySelectorAll('.contact-box input[type="text"]')[1].value.trim();
    const message = document.querySelector('.contact-box textarea').value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you " + name + "! Your message has been received by Nasrullah Cloth.");
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
