document.addEventListener('DOMContentLoaded',function() {
    const parallaxElement = document.querySelectorAll('.parallax-section');
    window.addEventListener('scroll', function() {
        let scrollPosition =window.pageYOffset;

        parallaxElements.forEach(function(element) {
            let spedd = element.dataset.speed || 0.5;
            element.style.backgroundPositionY = -(scrollPosition * speed) +'px';
        })
    })
})