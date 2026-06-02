document.addEventListener('DOMContentLoaded',function() {
    const parallaxElements = document.querySelectorAll('.parallax-section');
    window.addEventListener('scroll', function() {
        let scrollPosition =window.pageYOffset;

        parallaxElements.forEach(function(element) {
            let speed = element.dataset.speed || 0.5;
            element.style.backgroundPositionY = -(scrollPosition * speed) +'px';
        })
    })
})
