document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
    const slideCount = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide (index));
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.dot');

    function goToSlide(slideIndex) {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    function nextSlide () {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    let slideInterval = setInterval(nextSlide, 3000);

    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval (nextSlide, 3000);
    })
})
