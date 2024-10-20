// script.js

document.addEventListener("DOMContentLoaded", function() {
    function adaptToMobile() {
        const articlesContainer = document.querySelector('.articles-container');
        const articles = document.querySelectorAll('.article');
        
        // Check if screen width is less than 768px (for mobile)
        if (window.innerWidth < 768) {
            // Adjust article container to stack vertically
            articlesContainer.style.width = '100%';
            articles.forEach(article => {
                article.style.flexDirection = 'column'; // Stack article content
                article.querySelector('img').style.width = '100%'; // Full width images
                article.querySelector('img').style.marginRight = '0'; // Remove margin
            });
        } else {
            // Revert to original styles for larger screens
            articlesContainer.style.width = '70%';
            articles.forEach(article => {
                article.style.flexDirection = 'row'; // Restore row layout
                article.querySelector('img').style.width = '150px'; // Restore image size
                article.querySelector('img').style.marginRight = '15px'; // Restore margin
            });
        }
    }

    // Call the function initially
    adaptToMobile();

    // Add an event listener to handle window resize
    window.addEventListener('resize', adaptToMobile);
});
