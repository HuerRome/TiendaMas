let menu=document.querySelector(".menu-active");
let button= document.querySelector(".menu");

button.addEventListener('click',()=>{
    menu.classList.toggle("active");
})





// Funcionalidad del Slider
/*
const sliders = document.querySelectorAll(".slider, .slider-2");
sliders.forEach(slider => {
    let currentIndex = 0;
    const items = slider.querySelectorAll("div > div:last-child > div");
    const prevButton = slider.querySelector("button:first-child");
    const nextButton = slider.querySelector("button:last-child");

    function updateSlider() {
        items.forEach((item, index) => {
            item.style.display = (index >= currentIndex && index < currentIndex + 4) ? "block" : "none";
        });
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex + 4 < items.length) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    updateSlider();
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider-h");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    let index = 0;

    function moveSlider(direction) {
        const totalItems = slider.children.length;
        index += direction;
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener("click", () => moveSlider(-1));
    next.addEventListener("click", () => moveSlider(1));
});






