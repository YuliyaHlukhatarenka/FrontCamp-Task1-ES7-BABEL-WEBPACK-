class DataService {
    async getArticles(id) {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=e09036cd7e8d417db292088ad70ea084`);
        let news = await response.json();
        let articles = news.articles;
        if ( articles.length === 7) {
            throw 'length is 7!'
        } else 
        return articles;
    }

    async  getChanels() {
        let response = await fetch('https://newsapi.org/v2/sources?apiKey=e09036cd7e8d417db292088ad70ea084');
        let chanels = await response.json();
        let sources = chanels.sources;
        return sources;
    }
}
export default DataService;