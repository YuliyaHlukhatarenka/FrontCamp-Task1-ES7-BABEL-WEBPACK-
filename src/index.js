import DataService from './DataService';
import showChanels from './drawChanels';
import drawArticlesList from './drawArticlesList';
import './style.css';

let server = new DataService();

document.addEventListener("load", documentLoaded());

function documentLoaded() {
    server.getChanels()
        .then(response => {
            showChanels(response);
            document.addEventListener('change', drawChanelArticles);
        });
}

function drawChanelArticles(e) {
    if (e.target.selectedIndex) {
        server.getArticles(e.target[e.target.selectedIndex].id)
            .then(
                response => {drawArticlesList(response)},
                error => {import(/* webpackMode: "lazy" */ './errorHandling.js').then( errorFunc => errorFunc.ErrorHandling.getInstance(error))}
            )
    }
}