class DataServiceFactory {
    createRequest(type, data, url) {
        switch (type) {
            case 'GET':
                return new GETRequest(data)
            default:
                return new otherRequests(type, url)
        }
    }
}
class GETRequest {
    constructor(id) {
        const apiKey = 'e09036cd7e8d417db292088ad70ea084';
        let url;
        if ( id ) {
            url = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${apiKey}`;
        } else {
            url = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
        }
        this.result = this.getData(url);
    }

    async getData(url) {
        let response = await fetch(url);
        let result = await response.json();
        if ( result.status != 'ok' || result.totalResults === 7) {
            throw "Something wrong(there are 7 articles!)";
        }
        return result;
    }
}

class otherRequests { }

export { DataServiceFactory };