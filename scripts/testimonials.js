const nextSlide2 = document.querySelector(".testimonials__next")
const prevSlide2 = document.querySelector(".testimonials__prev")
const slider2 = document.querySelectorAll(".testimonials__card")

let x = 0;
nextSlide2.addEventListener("click",()=>{  
    x+=100;
    if(x==slider2.length*100){
        x=0
    }
    slider2.forEach(e=>{
        e.style.left= `-${x}%`;
    })   
})
prevSlide2.addEventListener("click",()=>{  
    x-=100;
    if(x==-100){
        x=(slider2.length-1)*100
    }
    slider2.forEach(e=>{
        e.style.left= `${-x}%`;
    })    

})
    