function drowArticlesList(list) {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');

    list.map(item => {
        const row = document.createElement('tr');
        const columnImg = document.createElement('td');
        let img = document.createElement('img');
        img.style = 'top:10px;left:10px;width:200px;height:auto';
        img.src = item.urlToImage;
        columnImg.appendChild(img);
        row.appendChild(columnImg);
        const columnText = document.createElement('td');
        columnText.innerHTML = `<div><h3> ${item.title} </h3><p>Author: ${item.author}</p><p>Published: ${item.publishedAt}</p><p>${item.description}</p><a href=${item.url} target="_blank">more..</a></div>`;
        row.appendChild(columnText);
        table.appendChild(row);
    })

    fragment.appendChild(table);
    const div = document.createElement('div');
    div.className = 'news-list';
    div.style.width = '600px';
    div.appendChild(fragment);
    document.body.appendChild(div);

}

export default drowArticlesList;