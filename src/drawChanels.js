function drawChanels(items) {
    let i = 1;
    const fragment = document.createDocumentFragment();
    const noSelection = document.createElement('option');
    noSelection.value = 0;
    noSelection.innerHTML = 'Select a chanel';
    fragment.appendChild(noSelection);

    items.map(item => {
        const selectItem = document.createElement('option');
        selectItem.id = item.id;
        selectItem.value = i;
        i++;
        selectItem.innerHTML = item.name;
        fragment.appendChild(selectItem);
    })

    const input = document.createElement('div');
    input.className = 'chanels';
    input.style.width = '200px';

    const datalist = document.createElement('select');

    datalist.appendChild(fragment);
    input.appendChild(datalist);
    document.body.appendChild(input);
}
export default drawChanels;