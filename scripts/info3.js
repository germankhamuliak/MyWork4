const cards = document.querySelectorAll(".info3__left__card")

cards.forEach(e=>{
    e.addEventListener('click',()=>{
        if(!e.classList.contains("active-card")){
            cards.forEach(e=>{
                e.classList.remove("active-card")
            })
            e.classList.add("active-card")
        }
    })
})