const tab = document.querySelectorAll(".info2__linc");
const tabContent = document.querySelectorAll(".info2__tab-content");


tab.forEach((e,index)=>{   
    
    e.addEventListener("click",()=>{
        if(!e.classList.contains("ative-linc")){
        tab.forEach(e=>{
            e.classList.remove("ative-linc");
        })
        e.classList.add("ative-linc"); 
        tabContent.forEach(e=>{
            e.classList.remove("active-content")
        }) 
        tabContent[index].classList.add("active-content");
        }
    })
})