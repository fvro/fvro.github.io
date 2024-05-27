document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const totalImages = 68; // Total number of images
    const images = [];

    // Generate the image paths
    for (let i = 1; i <= totalImages; i++) {
        images.push(`images/galaxies/image_${i}.png`);
    }

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    header.style.backgroundImage = `url(${randomImage})`;
});
