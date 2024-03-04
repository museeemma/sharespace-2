const images = document.querySelectorAll('.image-gallery img');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.opacity = i === index ? 1 : 0;
    });
}

function rotateImages() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', rotateImages);
