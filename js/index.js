function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function toggleMobileMenuDropdown(menu) {
    menu.classList.toggle('open');
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (x) {
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
}