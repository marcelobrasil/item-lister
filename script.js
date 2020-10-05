/* Lista de itens interativa */

// Seleção de elementos
const itemForm = document.getElementById('add-items-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const searchForm = document.getElementById('searchbox');

// Event listeners
itemForm.addEventListener('submit', addItem);
searchForm.addEventListener('input', searchItem);

/* Funções */

// Adicionar item
function addItem(e) {

    // Não deixa o broswer recarregar a página
    e.preventDefault();

    // Cria um novo item para a lista
    const newItem = itemInput.value;
    if (newItem !== "") {
        const newLi = document.createElement('li');
        newLi.classList.add('items');
        newLi.appendChild(document.createTextNode(newItem));

        // Cria um botão de remover item
        const newXButton = document.createElement('input');
        newXButton.setAttribute('type', 'button');
        newXButton.setAttribute('value', 'X');
        newXButton.classList.add('x-button');
        newLi.appendChild(newXButton);

        // Faz o botão de remoção funcionar, função declarada mais adiante
        newXButton.addEventListener('click', removeItem);

        // Adiciona o item ao DOM e limpa o form
        itemList.appendChild(newLi);
        newLi.parentNode.style.border = '1px solid lightgray'
        itemInput.value = "";
    };
};

// Remover item
function removeItem(e) {
    e.target.parentNode.remove();
};

// Esconder item
function displayNone(element) {
    element.setAttribute('style', 'display: none;')
};

// Mostrar item
function display(element) {
    element.setAttribute('style', 'display: ;')
};

// Procurar item
function searchItem(e) {
    e.preventDefault(); // Não deixa recarregar a página
    searchQuery = document.getElementById('filter').value; // Seleciona o texto escrito na caixa de procura
    let itemArray = Array.from(itemList.getElementsByClassName('items')); // Seleciona os itens presentes na lista
    let notFilteredArray = itemArray.filter(i => (i.textContent.includes(searchQuery))); // Seleciona os itens que correspondem à procura
    let filteredArray = itemArray.filter(i => !(i.textContent.includes(searchQuery))); // Seleciona os itens que não correspondem à procura
    notFilteredArray.map(i => display(i)); // Mostra itens que correspondem à procura
    filteredArray.map(i => displayNone(i)); // Esconde itens que não correspondem à procura
};
