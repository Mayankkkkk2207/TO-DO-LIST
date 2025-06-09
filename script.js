let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Load tasks when page loads
function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            tasks = tasks.filter(t => t.id !== task.id);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            li.remove();
        };

        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const li = document.createElement("li");
    
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        tasks = tasks.filter(t => t.id !== task.id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
}

// Add event listener for Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);