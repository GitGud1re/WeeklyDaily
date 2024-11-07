// Define tags and associated keywords
const tags = {
    "Health": ["health", "wellness", "fitness", "nutrition", "apple", "seeds"],
    "Gaming": ["gaming", "game", "console", "PC", "eSports"],
    "Technology": ["tech", "gadgets", "AI", "software", "hardware"]
    // Add more categories as needed
};

// Function to assign tags based on keywords in the article content
function assignTags(articleContent) {
    const articleTags = [];
    for (let tag in tags) {
        if (tags.hasOwnProperty(tag)) {
            const found = tags[tag].some((keyword) => articleContent.toLowerCase().includes(keyword));
            if (found) {
                articleTags.push(tag);
            }
        }
    }
    return articleTags;
}

// Function to initialize tags for each article
function initializeTags() {
    // Select all article elements
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const content = article.querySelector('p').innerText;
        const tags = assignTags(content);

        // Create a div to display tags
        const tagDiv = document.createElement('div');
        tagDiv.className = 'tags';
        tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.innerText = tag;
            tagDiv.appendChild(tagSpan);
        });
        
        // Add the tags div to the article
        article.appendChild(tagDiv);
    });
}

// Run the initializeTags function after the page loads
document.addEventListener('DOMContentLoaded', initializeTags);
