document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const query = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');

    if (query === '') {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    // Dummy search results (you can expand this or fetch real data later)
    resultsDiv.innerHTML = `
        <div class="result-item">
            <a href="#">Result for "${query}" - Example Link 1</a>
            <p>This is a description of the first result related to "${query}".</p>
        </div>
        <div class="result-item">
            <a href="#">More on "${query}" - Example Link 2</a>
            <p>Another short summary for the second result you might be looking for.</p>
        </div>
    `;
});

function feelingLucky() {
    alert("You're feeling lucky — but there's nowhere to go yet! 🎲");
}
