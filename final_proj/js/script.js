console.log("js opened");

var navBar = document.getElementById("sticky_nav");
var sticky = navBar.offsetTop;
console.log("sticky " + sticky);
console.log("pageyoffset " + window.pageYOffset);

function runSticky() {
  console.log("sticky " + sticky);
  console.log("pageyoffset " + window.pageYOffset);
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  }
  else {
    navBar.classList.remove("sticky");
  }
}

// sticky nav script
window.onscroll = function() {
  runSticky();
};

var accordion = document.getElementsByClassName("accordion");
var it;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "block";
    }
  });
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
