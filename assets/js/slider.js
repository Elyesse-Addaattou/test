document.addEventListener('DOMContentLoaded', () => {


    new Swiper('.swiper', {
        speed: 600,
        loop: true,
        centeredSlides: false,
        spaceBetween: 0,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          
          1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
        }
      
      });

});