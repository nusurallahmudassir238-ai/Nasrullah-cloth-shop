document.addEventListener("DOMContentLoaded", function () {
    console.log("Nasrullah Cloth Website Loaded Successfully!");
});

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
