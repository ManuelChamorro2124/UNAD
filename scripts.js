// JavaScript para hacer que las imágenes del banner se desplacen automáticamente
const bannerSlides = document.querySelector('#banner .banner-slides');
const images = document.querySelectorAll('#banner .banner-slides img');
const slideWidth = images[0].clientWidth;
let currentIndex = 0;

function slideImages() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * slideWidth;
    bannerSlides.style.transform = `translateX(${offset}px)`;
}

setInterval(slideImages, 3000); // Cambia la imagen cada 3 segundos

startSlide();
