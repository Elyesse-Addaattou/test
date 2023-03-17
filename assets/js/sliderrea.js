const slider = document.getElementById("slider");
const grille = document.querySelector(".grille");

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    
    if(n > slides.length) { slideIndex = 1 }
    
    if(n < 1 ) { slideIndex = slides.length }
    
    // Cacher toutes les slides
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Retirer "active" de tous les points
    for(let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    
    // Afficher la slide demandée
    slides[slideIndex - 1].style.display = 'block';
    
    // Ajouter "active" sur le point cliqué
    dots[slideIndex - 1].classList.add('active');

    handleSlides();
  }
  
  function handleSlides(){

   document.body.addEventListener("click",function (e){ 
     console.log(e.target.parentElement);
     if ( slider.contains(e.target) ) {
     }
     else if(grille.style.display="none") {
         slider.remove(); 
         grille.style.display="grid";
   }

  })
}

  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => {
    gridItem.addEventListener("click", handleClickGrid )
  });

  function handleClickGrid(e){
    const targetName = e.target.parentNode.dataset.target;
    const slidesContainer = document.querySelector(".slides--container");
    for(i=1; i<5 ; i++){
      const slides = document.createElement("div");
      slides.classList.add("slides");
      const image = document.createElement("img");
      image.src="assets/img/photoSlider/"+targetName+"/"+i+".jpg";
      image.style="width:100%";
      slides.appendChild(image);
      console.log(slides);
      console.log(slidesContainer);
      slidesContainer.prepend(slides);
    }
    grille.style.display = "none";
    showSlides(slideIndex);
  }
    