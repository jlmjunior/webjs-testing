const add = document.querySelector('#btnAdicionar');
const inputElement = document.querySelector('#inputAdd');
const listElements = document.querySelector('#listElements');

var listProducts = [];

function renderList() {
	listElements.innerHTML = '';
	
	for (item of listProducts){
		var list = document.createElement('li');
		var itemText = document.createTextNode(item);
	
		list.appendChild(itemText);
		listElements.appendChild(list);
	}
}

renderList();

function addItem() {
	let text = inputElement.value;

	listProducts.push(text);
	inputElement.value = '';

	renderList();
}

add.onclick = addItem;
