import $ from 'jquery';

(function(){
    // Wait for DOM to be ready
    $(document).ready(function() {
        const todoList = $('#todo-list');
        const doneList = $('#done-list');
        const addTaskForm = $('#add-task-form');
        const taskInput = $('#task-input');

        // Add task functionality
        addTaskForm.on('submit', function(e) {
            e.preventDefault();
            const taskText = taskInput.val().trim();
            
            if (taskText) {
                addTaskToList(todoList, taskText);
                taskInput.val(''); // Clear input
            }
        });

        // Function to add a task to a list
        function addTaskToList(list, taskText) {
            const li = $('<li>');
            const p = $('<p>').text(taskText);
            
            // Create buttons
            const checkmarkBtn = $('<button>')
                .attr('type', 'button')
                .attr('aria-label', 'Mark as complete.')
                .text('✓');
            
            const deleteBtn = $('<button>')
                .attr('type', 'button')
                .attr('aria-label', 'Delete task.')
                .text('✗');
            
            const upBtn = $('<button>')
                .attr('type', 'button')
                .attr('aria-label', 'Move task up.')
                .text('↑');
            
            const downBtn = $('<button>')
                .attr('type', 'button')
                .attr('aria-label', 'Move task down.')
                .text('↓');

            // Add event handlers
            checkmarkBtn.on('click', function() {
                moveTaskToDone(li, taskText);
            });
            
            deleteBtn.on('click', function() {
                li.remove();
            });
            
            upBtn.on('click', function() {
                moveTaskUp(li);
            });
            
            downBtn.on('click', function() {
                moveTaskDown(li);
            });

            // Assemble the task item
            li.append(p, checkmarkBtn, deleteBtn, upBtn, downBtn);
            list.append(li);
        }

        // Move task to done list
        function moveTaskToDone(li, taskText) {
            li.remove();
            const doneLi = $('<li>');
            const doneP = $('<p>').text(taskText);
            doneLi.append(doneP);
            doneList.append(doneLi);
        }

        // Move task up
        function moveTaskUp(li) {
            const prev = li.prev();
            if (prev.length) {
                li.insertBefore(prev);
            }
        }

        // Move task down
        function moveTaskDown(li) {
            const next = li.next();
            if (next.length) {
                li.insertAfter(next);
            }
        }
    });
})();
