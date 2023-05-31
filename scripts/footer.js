const footerCards = document.querySelectorAll(".footer__info")

footerCards.forEach(e=>{
    e.addEventListener('click',()=>{
        if(!e.classList.contains("info-active")){
            footerCards.forEach(e=>{
                e.classList.remove("info-active")
            })
            e.classList.add("info-active")
        }
    })
})