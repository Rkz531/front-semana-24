
const images = document.querySelectorAll(".image");

images.forEach((image) => {
    function toggleImage() {
        image.classList.toggle("selected");
    }

    image.addEventListener("click", toggleImage);

    image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleImage();
        }
    });
});
