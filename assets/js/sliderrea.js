
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    
    
    if(n > slides.length) { slideIndex = 1 }
    
    if(n < 1 ) { slideIndex = slides.length }
    
    // Cacher toutes les slides
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Afficher la slide demandée
    slides[slideIndex - 1].style.display = 'block';
    
  }
  
  const gridItems = document.querySelectorAll(".grid-item");
  const container = document.querySelector(".container");
  const contain = document.querySelector(".contain");
  const grille = document.querySelector(".grille");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let check = true
  

  // Creer les divs slides au click
  gridItems.forEach(gridItems => {
  gridItems.addEventListener('click', (e) => {
    //Recuperer la data-base des gridItems
 const targetNumber = e.target.parentNode.dataset.target
 let targetName = e.target.parentNode.dataset.foo

    
    // Creation de la boucle for
    for(i=0; i < targetNumber; i++){
      
    const slide = document.createElement("div");
    slide.classList.add("slides");
    container.appendChild(slide)
  

    // Creer le lien vers les images dans les divs
    const image = document.createElement("img");
    image.src = "assets/img/photoSlider/"+targetName+"/"+i+".jpg"
    slide.appendChild(image)
    console.log(targetName);

    if(i===0) {
      slide.style.display = "block"
    }

    
    // Faire disparaitre les grid item
    grille.style.display = "none";
    document.body.style.backgroundColor = " #333";
    next.style.opacity = "100%"
    prev.style.opacity = "100%"
    
  } 
  contain.style.display = "";
  check = false

  
  })
});

contain.addEventListener('click',() => {
  if (check === false ) {
    const slides = document.querySelectorAll(".slides");
    slides.forEach(slides => {
      slides.remove()
    })
    contain.style.display = "none";
    grille.style.display = "";
    document.body.style.backgroundColor = " #fff";
    next.style.opacity = "0";
    prev.style.opacity = "0";

  }
  else {
      
  }
})