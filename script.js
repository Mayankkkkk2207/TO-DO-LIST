let tasks = [];

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    console.log("Key pressed:", event.key);  // Debug log
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    console.log("addTask function called");  // Debug log
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task object
    const task = {
        id: Date.now(),
        text: taskInput.value,
        completed: false
    };

    // Add to array
    tasks.push(task);
    console.log("Current tasks:", tasks);  // Debug log

    const li = document.createElement("li");
    
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        // Remove from array
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    taskInput.value = "";
}