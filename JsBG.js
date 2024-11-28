function scaleBackgroundImage() {
    const body = document.body;

    // Check the viewport width
    if (window.innerWidth < 768) { // Mobile breakpoint
        body.style.backgroundSize = 'contain'; // Scale background for mobile
        body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating
        body.style.backgroundAttachment = 'fixed'; // Fixed attachment for mobile
        body.style.backgroundPosition = 'center'; // Center the image
    } else {
        body.style.backgroundSize = 'cover'; // Scale background for PC
        body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating
        body.style.backgroundAttachment = 'fixed'; // Fixed attachment for PC, preventing scrolling
        body.style.backgroundPosition = 'center'; // Center the image for PC too
    }
}

// Run on load
window.onload = scaleBackgroundImage;

// Also run on resize
window.onresize = scaleBackgroundImage;
