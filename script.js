document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");

    // Load tasks from LocalStorage when page opens
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    function renderTasks() {
        todoList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${task}</span> <span class="delete-btn" onclick="deleteTask(${index})">X</span>`;
            todoList.appendChild(li);
        });
    }

    addBtn.addEventListener("click", () => {
        if (todoInput.value.trim() !== "") {
            tasks.push(todoInput.value);
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Saves to browser storage
            todoInput.value = "";
            renderTasks();
        }
    });

    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Updates browser storage
        renderTasks();
    };

    renderTasks();
});