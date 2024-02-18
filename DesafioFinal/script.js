// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  }
}

// Função para renderizar as tarefas na lista
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Função para deletar uma tarefa
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Vincular a função addTask ao botão de adicionar tarefa
document.getElementById("addTaskButton").addEventListener("click", addTask);

// Inicializar a lista de tarefas ao carregar a página
window.onload = renderTasks;
