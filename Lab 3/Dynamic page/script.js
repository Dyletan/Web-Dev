function addTask() {
    let newItem = document.createElement('div');
    newItem.className = "list-item";

    let inputText = document.getElementById('input-task').value;
    let textSpan = document.createElement('span');
    textSpan.textContent = inputText;
    textSpan.className = "text"

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        textSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'trash_can.png';
    deleteIcon.alt = 'Delete';
    deleteIcon.className = 'delete-icon';
    deleteIcon.addEventListener('click', function() {
        newItem.remove();
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(textSpan);
    newItem.appendChild(deleteIcon);

    document.getElementById('tasks-container').appendChild(newItem);

    document.getElementById('input-task').value = '';
}