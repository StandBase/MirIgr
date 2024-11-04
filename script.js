const newsData = [
    {
        title: "Новость 1",
        content: "Сюда напишешь сам в серипте script.js",
    },
    {
        title: "Новость 2",
        content: "Сюда напишешь сам в серипте script.js",
    },
    {
        title: "Новость 3",
        content: "Сюда напишешь сам в серипте script.js",
    },
];

function displayNews() {
    const newsBoard = document.getElementById('newsBoard');
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsBoard.appendChild(newsItem);
    });
}

document.addEventListener('DOMContentLoaded', displayNews);
