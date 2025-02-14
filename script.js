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








