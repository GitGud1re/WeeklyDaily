const API_KEY = "f1853342756e474dbf7cba5b7062d0b8"; // Replace with your NewsAPI key
const NEWS_SOURCES = ["bbc-news", "cnn", "techcrunch"]; // Add more sources if needed
const ARTICLE_COUNT = 4; // Number of articles to fetch

// Check if news needs refreshing
function shouldRefreshNews() {
    const lastUpdated = localStorage.getItem("news_last_updated");
    if (!lastUpdated) return true; // If no timestamp, refresh
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    return Date.now() - parseInt(lastUpdated) > oneWeek;
}

// Fetch news from NewsAPI
async function fetchNews() {
    const source = NEWS_SOURCES[Math.floor(Math.random() * NEWS_SOURCES.length)]; // Pick a random source
    const url = `https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=${ARTICLE_COUNT}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
            localStorage.setItem("news_articles", JSON.stringify(data.articles)); // Save articles
            localStorage.setItem("news_last_updated", Date.now().toString()); // Save timestamp
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Load news from localStorage and insert into articles
function loadNews() {
    const newsContainer = document.getElementById("news-container");
    const articles = JSON.parse(localStorage.getItem("news_articles")) || [];

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No news available. Try again later.</p>";
        return;
    }

    let newsHTML = "";
    articles.forEach((article, index) => {
        newsHTML += `
            <div class="news-item">
                <h2>${article.title}</h2>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
            <hr>
        `;
    });

    newsContainer.innerHTML = newsHTML;
}

// Refresh news if needed
if (shouldRefreshNews()) {
    fetchNews().then(loadNews);
} else {
    loadNews();
}
