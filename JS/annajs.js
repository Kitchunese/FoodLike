const slider3 = document.querySelector(".slider3");
const btnNext = slider3.querySelector(".slider3__btn--next");
const btnPrev = slider3.querySelector(".slider3__btn--prev");
const list3 = slider3.querySelector(".slider3__list");
let current3 = 1;
const widthSlide = 390;
const numSlide = 5;


btnNext.addEventListener("click", function(){
    let dist = current3*widthSlide;
    list3.style.transform = "translate("+(-dist)+ "px)";
    current3++;
    if(current3 == numSlide - 2) {
        btnNext.disabled = true;
        
    }
    btnPrev.disabled = false;
});

btnPrev.addEventListener("click", function(){
    current3--;
    let dist = widthSlide*current3;
    list3.style.transform = "translate("+(-dist)+ "px)";
    if(current3 == numSlide-5) {
        btnPrev.disabled = true;
        btnNext.disabled = false;
  }
  
});
console.log("debug")
