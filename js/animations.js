
let headintTl=gsap.timeline()
let aboutTl=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:".about-me",
            start:"top 60%" //triiger viewport
        }
    })
let skillServiceTl=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:".skill-service",
            start:"top 60%", //triiger viewport        
        }
    })
let projectsTl=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:".projects",
            start:"top 90%", //triiger viewport        
        }
    })
let hireTl=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:".contact",
            start:"top 90%", //triiger viewport        
        }
    })
let footerTl=gsap.timeline(
    {
        scrollTrigger:
        {
            trigger:"footer",
            start:"top 90%", //triiger viewport        
        }
    })
headintTl.from(".info h3",{x:-500,opacity:0,duration:1,ease:"power3.inOut"},"<50%")
headintTl.from(".info h1",{x:-500,opacity:0,duration:1,ease:"power3.inOut"},">")
headintTl.from(".hero .me",{x:200,opacity:0,duration:1,ease:"back.Out"},"<10%")
headintTl.from(".info .btn",{y:200,opacity:0,duration:1,ease:"back.out"},"<70%")
headintTl.from(".info .socials",{y:200,opacity:0,duration:1,ease:"back.out"},"<70%")
let x = window.matchMedia("(min-width: 800px)")
match(x,headintTl) // Call listener function at run time
x.addListener(match);
function match(x,headintTl)
{
    if(x.matches)
    {
        headintTl.from("nav h2",{x:-200,opacity:0,duration:1,scale:0.3,ease:"power3.inOut"},"<")
        headintTl.from("nav .nav-btn",{x:300,opacity:0,duration:1,scale:0.3,ease:"power3.inOut"},"<50%")
        headintTl.from("nav li",{y:200,opacity:0,scale:0,ease:"power3.inOut",stagger:{each:0.1},duration:2},"<20%")
    }
    
}


aboutTl.from(".about-img",{x:-500,opacity:0,scale:0.3,duration:1,ease:"power5.inOut"})
aboutTl.from(".about-info h2",{y:500,opacity:0,scale:0.3,duration:1,ease:"power5.inOut"},"<30%")
aboutTl.from(".about-info p",{y:500,opacity:0,scale:0.3,duration:1,ease:"power5.inOut"},"<30%")

skillServiceTl.from(".skills",{x:-500,opacity:0,duration:1,ease:"power1.inOut"})
skillServiceTl.from(".service",{x:500,opacity:0,duration:1,ease:"power1.inOut"},"<50%")


projectsTl.from(".projects h2",{y:500,opacity:0,scale:.3,duration:1,ease:"power3.inOut"})
projectsTl.from(".projects .project",{y:500,opacity:0,scale:.3,stagger:.2,duration:1.5,ease:"power3.inOut",clearProps:"all"},"<")

hireTl.from(".contact h2",{y:500,opacity:0,scale:.3,duration:1,ease:"power3.inOut"})
hireTl.from(".contact p",{y:500,opacity:0,scale:.3,duration:1,ease:"power3.out"},"<50%")
hireTl.from(".contact li",{y:300,opacity:0,scale:.3,stagger:0.2,duration:.5,ease:"power1.out"},"<30%")

footerTl.from("footer .logo",{x:-500,opacity:0,duration:1,ease:"power5.inOut"})
footerTl.from("footer .contacts",{x:500,opacity:0,duration:1,ease:"power5.inOut"},"<")
footerTl.from("footer .contacts p",{x:500,opacity:0,duration:1,ease:"power5.inOut"},"<50%")
footerTl.from("footer .sections",{y:200,opacity:0,duration:1,ease:"power5.inOut"},"<50%")