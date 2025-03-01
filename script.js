let menu=document.querySelector(".menu-active");
let button= document.querySelector(".menu");

button.addEventListener('click',()=>{
    menu.classList.toggle("active");
})




/*--------------------------------------Slider--------------------------------------*/
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let slideWidth = slides[0].offsetWidth; // Ancho de una slide
let index = 0;
let isMoving = false;

// Función para mover el slider con animación
function moveSlide(direction) {
    if (isMoving) return; // Evitar múltiples clics rápidos
    isMoving = true;

    if (direction === 1) {
        // Mover a la izquierda
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
            // Mueve el primer slide al final
            let firstSlide = slider.firstElementChild;
            slider.appendChild(firstSlide);
            // Resetear posición sin animación
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            isMoving = false;
        }, 500);
    } else {
        // Mover a la derecha
        let lastSlide = slider.lastElementChild;
        slider.prepend(lastSlide);
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(0)";
            isMoving = false;
        }, 20);
    }
}

// Agregar funcionalidad a los botones
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Autoplay cada 3 segundos
let autoPlay = setInterval(() => moveSlide(1), 3000);

// Detener autoplay cuando el mouse está encima
document.querySelector('.slider-container').addEventListener('mouseenter', () => clearInterval(autoPlay));
document.querySelector('.slider-container').addEventListener('mouseleave', () => autoPlay = setInterval(() => moveSlide(1), 3000));

// Función para swipe en móviles
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX > touchEndX + 50) moveSlide(1);  // Swipe izquierda
    if (touchStartX < touchEndX - 50) moveSlide(-1); // Swipe derecha
});






