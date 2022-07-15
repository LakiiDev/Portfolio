let modals=()=>
{
    let moreBtn=document.querySelectorAll("#moreBtn")
    let more=document.querySelectorAll(".more")
    let close=document.querySelectorAll("#close")
    for (let i = 0; i < moreBtn.length; i++) {
        moreBtn[i].addEventListener("click",()=>
        {
            more[i].style.setProperty("display","flex")
            more[i].style.setProperty("opacity","1")
            document.body.style.setProperty("overflow","hidden")
            let openModalTl=gsap.timeline();
            openModalTl.from(more[i],{scale:0.3,duration:.3,ease:"power5.inOut"})
            openModalTl.from(".more .content h2",{x:-200,opacity:0,duration:1,ease:"power3.inOut"},">")
            openModalTl.from(".more .heading a",{x:200,opacity:0,duration:1,ease:"power3.inOut"},"<50%")
            openModalTl.from(".more .img",{y:200,opacity:0,duration:1,ease:"power3.inOut"},"<50%")
            openModalTl.from(".more .paras",{y:200,opacity:0,duration:1,ease:"power5.inOut"},"<20%")
            openModalTl.from(".more .contact-me",{y:200,opacity:0,duration:1,ease:"power5.inOut"},"<20%")
        })
        close[i].addEventListener("click",()=>
        {
            more[i].style.setProperty("display","none")
            more[i].style.setProperty("opacity","0")
            document.body.style.setProperty("overflow","visible")
        }) 
    }
    
}
modals();