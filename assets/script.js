const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const taskFilter = document.querySelector("#taskFilter");

// add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
                    <input type="checkbox" onchange="toggleTaskCompletion(this)">
                    <span>${taskText}</span>
                    <button class="remove__btn" onclick="removeTask(this)">Remove</button>
                `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

// remove a task
function removeTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}

// toggle task completion
function toggleTaskCompletion(checkbox) {
  const taskText = checkbox.nextElementSibling;
  taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

// filter tasks
function filterTasks() {
  const filterValue = taskFilter.value;
  const tasks = taskList.getElementsByTagName("li");
  for (const task of tasks) {
    const checkbox = task.querySelector("input[type='checkbox']");
    if (
      filterValue === "all" ||
      (filterValue === "completed" && checkbox.checked) ||
      (filterValue === "incomplete" && !checkbox.checked)
    ) {
      task.style.display = "list-item";
    } else {
      task.style.display = "none";
    }
  }
}
