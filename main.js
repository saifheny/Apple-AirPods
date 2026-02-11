// Get all the background divs
var backgrounds = document.querySelectorAll('.background');
// Get the slider and the images
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// Set the initial image index
let imageIndex = 0;

// Update the slider
function updateSlider() {
    // 1. Remove the classes from all images
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // 2. Add the 'active' class to the current image
    images[imageIndex].classList.add('active');

    // 3. Add the 'previous' class
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    // 4. Add the 'next' class
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // 5. Add the 'inactive' class to the other images
    images.forEach((image, index) => {
        // Calculate indexes for previous and next to compare
        let prevIndex = (imageIndex - 1 + images.length) % images.length;
        let nextIndex = (imageIndex + 1) % images.length;

        if (index !== imageIndex && index !== prevIndex && index !== nextIndex) {
            image.classList.add('inactive');
        }
    });

    // 6. Set the opacity of all background divs to 0
    backgrounds.forEach(background => {
        background.style.opacity = 0;
    });

    // 7. Set the opacity of the current background to 1
    if (backgrounds[imageIndex]) {
        backgrounds[imageIndex].style.opacity = 1;
    }

    // 8. Update the image index for the next run
    imageIndex = (imageIndex + 1) % images.length;
}

// --- Initialization ---

// Run the function once immediately to set the initial state
updateSlider();

// Update the slider every 3 seconds
setInterval(updateSlider, 3000);
