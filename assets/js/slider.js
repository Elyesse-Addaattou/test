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
        }
      
      });

      console.log("swiper done !");

});