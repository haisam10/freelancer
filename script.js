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
