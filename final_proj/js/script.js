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
