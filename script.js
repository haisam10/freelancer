var projectcard = gsap.timeline()

projectcard.from(".project-card", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.2
  })

function openImage(src) {
  document.getElementById("popupImage").src = src;
  document.getElementById("imagePopup").style.display = "flex";
}

function closeImage() {
  document.getElementById("imagePopup").style.display = "none";
}

// Carousel Slider Functionality
let slideIndex = 1;
let slideTimer;

function changeSlide(n) {
  clearTimeout(slideTimer);
  showSlide(slideIndex += n);
  autoSlide();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlide(slideIndex = n);
  autoSlide();
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

function autoSlide() {
  slideTimer = setTimeout(() => {
    slideIndex++;
    showSlide(slideIndex);
    autoSlide();
  }, 4000);
}

// Start the carousel on page load
document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
  autoSlide();
});
