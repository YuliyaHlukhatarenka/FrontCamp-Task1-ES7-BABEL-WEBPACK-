import { DataServiceFactory } from './DataService';
import showChanels from './drawChanels';
import drawArticlesList from './drawArticlesList';
import './style.css';

const proxyRequest = new Proxy(new DataServiceFactory(), {
    set(target, prop, value) {
        if (prop) {
            target.createRequest(value);
            return true;
        } else {
            return false;
        }
    }
});

document.addEventListener("load", documentLoaded());

function documentLoaded() {
    const chanels = proxyRequest.createRequest('GET');
    chanels.result.then(response => {
        showChanels(response.sources);
        document.addEventListener('change', drawChanelArticles);
    });
}

function drawChanelArticles(e) {
    if (e.target.selectedIndex) {
        const articles = proxyRequest.createRequest('GET', e.target[e.target.selectedIndex].id);
        articles.result.then(
            response => { drawArticlesList(response.articles) },
            error => { import(/* webpackMode: "lazy" */ './errorHandling.js').then(errorFunc => errorFunc.ErrorHandling.getInstance(error)) }
        )
    }
}
