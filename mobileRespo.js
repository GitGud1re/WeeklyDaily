document.addEventListener("DOMContentLoaded", function() {
    function adaptToMobile() {
        const articlesContainer = document.querySelector('.articles-container');
        const articles = document.querySelectorAll('.article');
        
        if (articlesContainer) { // Check if the container exists
            // Check if screen width is less than 768px (for mobile)
            if (window.innerWidth < 768) {
                articlesContainer.style.width = '100%';
                articles.forEach(article => {
                    article.style.flexDirection = 'column'; // Stack article content
                    const img = article.querySelector('img');
                    if (img) {
                        img.style.width = '100%'; // Full width images
                        img.style.marginRight = '0'; // Remove margin
                    }
                });
            } else {
                articlesContainer.style.width = '70%';
                articles.forEach(article => {
                    article.style.flexDirection = 'row'; // Restore row layout
                    const img = article.querySelector('img');
                    if (img) {
                        img.style.width = '150px'; // Restore image size
                        img.style.marginRight = '15px'; // Restore margin
                    }
                });
            }
        }
    }

    // Call the function initially
    adaptToMobile();

    // Add an event listener to handle window resize
    window.addEventListener('resize', adaptToMobile);
});
