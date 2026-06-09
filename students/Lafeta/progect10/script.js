let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;

function showSlide(n){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[n].classList.add("active");
    dots[n].classList.add("active");
}

next.onclick = function(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
}

prev.onclick = function(){
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
}

dots.forEach((dot, i) => {
    dot.onclick = function(){
        index = i;
        showSlide(index);
    }
});