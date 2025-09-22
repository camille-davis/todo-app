<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        <title>Tasks</title>
    </head>
    <body>
        <main>
            <div class="section">
                <div class="inner">
                    <div class="content narrow">
                        <h1>Tasks</h1>
                        
                        <h2>To do</h2>
                        <ul id="todo-list" aria-label="To do">
                            <!-- Todo items will be added here dynamically -->
                        </ul>
                        
                        <form id="add-task-form">
                            <label for="task-input">Enter a task.</label>
                            <input type="text" id="task-input" name="task" required>
                            <button type="submit">Submit</button>
                        </form>
                        
                        <h2>Done</h2>
                        <ul id="done-list" aria-label="Done">
                            <!-- Completed items will be added here dynamically -->
                        </ul>
                    </div><!-- .content -->
                </div><!-- .inner -->
            </div><!-- .section -->
        </main>
    </body>
</html>
