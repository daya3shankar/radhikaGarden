let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');

function changeImage() {
    images[currentIndex].style.opacity = 0; // Hide current image
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1; // Show next image
}

// Set interval for image change
setInterval(changeImage, 2000);
