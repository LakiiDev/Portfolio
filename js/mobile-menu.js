let showMenu=()=>
{
    let menu=document.querySelector(".menu")
    let close=document.querySelector(".close")
    let button=document.querySelector(".nav-btn")
    let links=document.querySelector(".nav-links")
    let body=document.body
    let mobileTl=gsap.timeline()
    menu.addEventListener("click",()=>
    {
        links.style.setProperty("display","flex")
        button.style.setProperty("display","block")
        menu.style.setProperty("display","none")
        close.style.setProperty("display","flex")
        body.style.setProperty("overflow","hidden")
        mobileTl.from(".nav-links",{opacity:0,y:200,duration:1,ease:"power4.inOut"})
        mobileTl.from(".nav-links li",{opacity:0,y:200,stagger:.3,duration:.7,ease:"power4.inOut"})
        mobileTl.from("nav .nav-btn",{opacity:0,y:200,ease:"power4.inOut"},"<80%")
    })
    links.addEventListener("click",()=>
    {
        mobileTl.to(".nav-links",{opacity:0,y:200,duration:1,ease:"power4.inOut"})
        mobileTl.to(".nav-links li",{opacity:0,y:200,stagger:.3,duration:.7,ease:"power4.inOut"})
        mobileTl.to("nav .nav-btn",{opacity:0,y:200,ease:"power4.inOut"},"<80%")
        links.style.setProperty("display","none")
        button.style.setProperty("display","none")
        close.style.setProperty("display","none")
        menu.style.setProperty("display","flex")
        body.style.setProperty("overflow","visible")
    })
    close.addEventListener("click",()=>
    {
        mobileTl.to(".nav-links",{opacity:0,y:200,duration:1,ease:"power4.inOut"})
        mobileTl.to(".nav-links li",{opacity:0,y:200,stagger:.3,duration:.7,ease:"power4.inOut"})
        mobileTl.to("nav .nav-btn",{opacity:0,y:200,ease:"power4.inOut"},"<80%")
        links.style.setProperty("display","none")
        button.style.setProperty("display","none")
        close.style.setProperty("display","none")
        menu.style.setProperty("display","flex")
        body.style.setProperty("overflow","visible")
    })
}


showMenu()