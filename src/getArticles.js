async function getArticles(id) {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=e09036cd7e8d417db292088ad70ea084`);
    let news = await response.json();
    let articles = news.articles;
    return articles;
}
export default getArticles;