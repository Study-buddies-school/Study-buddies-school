// JavaScript for changing header background color and alternating between photos
const header = document.querySelector('header');
const image = document.querySelector('.image img');

let currentPhotoIndex = 1; // Variable to track the current photo index

setInterval(() => {
    // Change header background color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    header.style.backgroundColor = "#" + randomColor;

    // Change photo
    currentPhotoIndex++;
    if (currentPhotoIndex > 5) {
        currentPhotoIndex = 1; // Reset to first photo
    }
    image.src = `photo${currentPhotoIndex}.png`;
}, 5000); // Change color and photo every 5 seconds


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



    var links = document.querySelectorAll('.header-link');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var submenu = this.nextElementSibling;

            // Toggle the display of the submenu
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });

  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds

  }
