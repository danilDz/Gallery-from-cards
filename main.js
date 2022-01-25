'use strict';
function slidesPlugin(activeSlide = 0){
    const slides = document.querySelectorAll('.image');

    slides[activeSlide].classList.add('active');

    function clearActiveClasses(){
        for(const slide of slides){
            slide.classList.remove("active");
        }
    }

    for(const slide of slides){
        slide.addEventListener("click", () => {
            clearActiveClasses();
            slide.classList.add("active");
        });
    }
    
        
}
slidesPlugin(2);