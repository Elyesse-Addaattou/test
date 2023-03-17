document.addEventListener('DOMContentLoaded', () => {


    new Swiper('.swiper', {
        speed: 600,
        loop: true,
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
          320: {
            slidesPerView: 1,
          },
    
          1200: {
            slidesPerView: 2,
          }
        }
      
      });

      console.log("swiper done !");

});