let loading = false; // Prevent multiple loads at the same time

// Function to load new articles
function loadArticles() {
  const container = document.getElementById('articles-container');
  const loader = document.getElementById('loader');

  // Show the loader
  loader.style.display = 'block';

  // Simulate fetching articles (replace this with a real data fetching method)
  setTimeout(() => {
    // Here, we append new articles dynamically
    for (let i = 0; i < 3; i++) {
      const newArticle = document.createElement('div');
      newArticle.className = 'article';

      // Article content (replace with actual dynamic content from your files)
      newArticle.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Article Image">
        <div>
          <h2>New Article Title</h2>
          <p>New article description...</p>
          <a href="articles/article${container.children.length + 1}.html" class="read-more-button">Read More</a>
        </div>
      `;
      container.appendChild(newArticle);
    }

    // Hide the loader
    loader.style.display = 'none';
    loading = false;
  }, 1000); // Simulate a delay for loading articles
}

// Event listener for scroll
window.addEventListener('scroll', () => {
  const content = document.getElementById('articles-container');
  const loader = document.getElementById('loader');

  // Check if we are near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
    loading = true;
    loadArticles();
  }
});
