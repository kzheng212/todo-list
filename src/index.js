document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Sumbit "Button" Event Listener
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = document.createElement("li");
    newTask.innerHTML = `<span>${taskInput.value}</span>
    <button class="remove-button">Remove</button>`;

    taskList.appendChild(newTask);
    taskInput.value = "";
  });

  // Use event delegation for dynamically target the remove button for each li
  taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-button")) {
      removeTask(e.target);
    }
  });

  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
});
