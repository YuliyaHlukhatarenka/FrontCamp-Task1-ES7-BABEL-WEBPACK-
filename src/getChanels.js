async function getChanels() {
    let response = await fetch('https://newsapi.org/v2/sources?apiKey=e09036cd7e8d417db292088ad70ea084');
    let chanels = await response.json();
    let sources = chanels.sources;
    return sources;
}
export default getChanels;