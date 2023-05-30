const nextSlide = document.querySelector(".next")
const prevSlide = document.querySelector(".prev")
const slider = document.querySelectorAll(".slider__slid")

let x = 0;
nextSlide.addEventListener("click",()=>{  
    x+=100;
    if(x==slider.length*100){
        x=0
    }
    slider.forEach(e=>{
        e.style.left= `-${x}%`;
    })   
})
prevSlide.addEventListener("click",()=>{  
    x-=100;
    if(x==-100){
        x=(slider.length-1)*100
    }
    slider.forEach(e=>{
        e.style.left= `${-x}%`;
    })    

})
    