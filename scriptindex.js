const carousel = document.querySelector('.image-carousel');
const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
const slideIndicators = document.querySelector('.slide-indicators');

let currentSlide = 0;

// Función para cambiar de diapositiva
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  updateSlideIndicators(index);
  currentSlide = index;
}

// Función para actualizar los indicadores de diapositiva
function updateSlideIndicators(index) {
  slideIndicators.innerHTML = '';
  slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    if (i === index) {
      indicator.classList.add('active');
    }
    slideIndicators.appendChild(indicator);
  });
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Función para avanzar o retroceder en las diapositivas
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event listeners para los botones de navegación
document.querySelector('.next-slide').addEventListener('click', nextSlide);
document.querySelector('.prev-slide').addEventListener('click', prevSlide);

// Función para cambiar de diapositiva automáticamente
setInterval(nextSlide, 10000); // Cambiar cada 10 segundos