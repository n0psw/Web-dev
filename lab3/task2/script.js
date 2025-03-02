function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
      
    if (taskInput.value.trim() !== "") {
        var task = document.createElement("li");
        task.className = "task";
            
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.onchange = function() {
        if (this.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        };
        
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = function() {
            task.remove();
        };
        
        task.appendChild(checkBox);
        task.appendChild(taskText);
        task.appendChild(deleteButton);
        
        taskList.appendChild(task);
        taskInput.value = "";
    }
}
    
    