function addItem() {
    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let item = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.textContent = '[Delete]';
    item.textContent = input.value;
    link.addEventListener('click', (event) => event.target.parentElement.remove());

    item.appendChild(link);
    list.appendChild(item);

    input.value = '';

};