let swiper= new Swiper(".swipperSkills",{
  slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      mousewheel:{
        enabled:true,
        invert: true
      },
      keyboard: {
        enabled: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
})