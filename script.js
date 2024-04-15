function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + " <button onclick=\"markCompleted(this)\">Complete</button><button onclick=\"deleteTask(this)\">Delete</button>";
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }
  
  function markCompleted(button) {
    var taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
  }
  
  function deleteTask(button) {
    var taskItem = button.parentNode;
    taskItem.remove();
  }
  