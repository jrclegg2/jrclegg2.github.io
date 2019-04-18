console.log("js opened");

var navBar = document.getElementById("sticky_nav");
var sticky = navBar.offsetTop;

function runSticky() {
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

var player, video, progress, progressFilled, toggle, skipper, ranges;
// IF ON HOME PAGE, GRAB VARIABLES FOR VARIOUS ELEMENTS
if (document.title == "Jack Clegg") {
  console.log("home page entered");
  var slideIndex = 1;
  showSlides(slideIndex);
  // FOLLOWING CODE FOR HTML5 VIDEO PLAYER
  player = document.querySelector('.player');
  video = player.querySelector('.player-video');
  progress = player.querySelector('.progress');
  progressFilled = player.querySelector('.filled-progress');
  toggle = player.querySelector('.toggle-play');
  skippers = player.querySelectorAll('[data-skip]');
  ranges = player.querySelectorAll('.player-slider');
  // event listeners
  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', progressUpdate);
  toggle.addEventListener('click', togglePlay);
  skippers.forEach(button => button.addEventListener('click', skip));
  ranges.forEach(range => range.addEventListener('change', rangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));

  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', e => mousedown && scrub(e));
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
}

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

// Logic
function togglePlay() {
  const playState = video.paused ? 'play' : 'pause';
  video[playState](); // Call play or paused method
}

function updateButton() {
  const togglePlayBtn = document.querySelector('.toggle-play');

  if (this.paused) {
    togglePlayBtn.innerHTML = `<svg class="" width="16" height="16" viewBox="0 0 16 16"><title>play</title><path d="M3 2l10 6-10 6z"></path></svg>`;
  } else {
    togglePlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16"><title>pause</title><path d="M2 2h5v12H2zm7 0h5v12H9z"></path></svg>`;
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
  video[this.name] = this.value;
}

function progressUpdate() {
  const percent = video.currentTime / video.duration * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

// navBar.classList.add("sticky");
// var hidden_nav = document.getElementById("hidden");

var nav_shown = false;
function changeMenu() {
  var hidden_links = document.getElementsByClassName("alive");
  var len = hidden_links.length;
  if (nav_shown) {
    for (i = len - 1; i >= 0; i--) {
      hidden_links[i].classList = "alive hidden";
    }
    nav_shown = false;
  }
  else {
    for (i = len - 1; i >= 0; i--) {
      hidden_links[i].classList = "alive";
    }
    nav_shown = true;
  }
}
