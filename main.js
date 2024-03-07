const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        const task = inputBox.value;
        const listItem = document.createElement('li');
        listItem.textContent = task;
        listContainer.appendChild(listItem);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
        inputBox.value = '';
    }
    saveList();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveList();
    }
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveList();
    }
}, false);
function saveList() {
    localStorage.setItem('listContainer', listContainer.innerHTML);
}
function loadList() {
    listContainer.innerHTML = localStorage.getItem('listContainer');
}
loadList();