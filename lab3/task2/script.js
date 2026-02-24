document.addEventListener('DOMContentLoaded', function() {

    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    const initialTasks = [
        { text: "First item", done: true },
        { text: "Second item", done: false },
        { text: "Third item", done: false }
    ];

    initialTasks.forEach(task => addTaskToDOM(task.text, task.done));

    addBtn.addEventListener('click', addNewTask);

    taskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNewTask();
        }
    });

    function addNewTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            taskInput.focus();
            return;
        }

        addTaskToDOM(taskText, false);
        taskInput.value = '';
        taskInput.focus();
    }

    function addTaskToDOM(taskText, isDone) {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        if (isDone) {
            listItem.classList.add('done');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = isDone;

        const taskSpan = document.createElement('span');
        taskSpan.className = 'todo-text';
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        todoList.appendChild(listItem);

        checkbox.addEventListener('change', function() {
            listItem.classList.toggle('done');
        });

        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }

});
