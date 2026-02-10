document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const taskInput = document.getElementById('taskInput');
            const addBtn = document.getElementById('addBtn');
            const todoList = document.getElementById('todoList');
            
            
            // Sample initial tasks
            const initialTasks = [
                { text: "Third Item", done: true },
                { text: "Second Item", done: false },
                { text: "First Item", done: false }
            ];
            
            // Load initial tasks
            initialTasks.forEach(task => addTaskToDOM(task.text, task.done));
            updateStats();
            toggleEmptyState();
            
            // Add task when button is clicked
            addBtn.addEventListener('click', addNewTask);
            
            // Add task when Enter key is pressed
            taskInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addNewTask();
                }
            });
            
            // Function to add a new task
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
                updateStats();
                toggleEmptyState();
            }
            
            // Function to add a task to the DOM
            function addTaskToDOM(taskText, isDone) {
                // Create list item
                const listItem = document.createElement('li');
                listItem.className = 'todo-item';
                if (isDone) {
                    listItem.classList.add('done');
                }
                
                // Create checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'todo-checkbox';
                checkbox.checked = isDone;
                
                // Create task text
                const taskSpan = document.createElement('span');
                taskSpan.className = 'todo-text';
                taskSpan.textContent = taskText;
                
                // Create delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                
                // Assemble the list item
                listItem.appendChild(checkbox);
                listItem.appendChild(taskSpan);
                listItem.appendChild(deleteBtn);
                
                // Add to the list (at the beginning)
                todoList.insertBefore(listItem, todoList.firstChild);
                
                // Add event listeners
                checkbox.addEventListener('change', function() {
                    listItem.classList.toggle('done');
                    updateStats();
                });
                
                deleteBtn.addEventListener('click', function() {
                    todoList.removeChild(listItem);
                    updateStats();
                    toggleEmptyState();
                });
            }
            
            // Function to show/hide empty state message
            function toggleEmptyState() {
                if (todoList.children.length === 0) {
                    emptyState.style.display = 'block';
                } else {
                    emptyState.style.display = 'none';
                }
            }
        });