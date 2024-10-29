function scaleBackgroundImage() {
    const body = document.body;

    // Check the viewport width
    if (window.innerWidth < 768) { // Mobile breakpoint (you can adjust as needed)
        body.style.backgroundSize = 'contain'; // Scale background for mobile
        body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating
        body.style.backgroundAttachment = 'fixed'; // Fixed attachment for mobile
    } else {
        body.style.backgroundSize = 'cover'; // Scale background for PC
        body.style.backgroundRepeat = 'no-repeat'; // Prevent repeating
        body.style.backgroundAttachment = 'fixed'; // Fixed attachment for PC, preventing scrolling
    }
}

// Run on load
window.onload = scaleBackgroundImage;

// Also run on resize
window.onresize = scaleBackgroundImage;
