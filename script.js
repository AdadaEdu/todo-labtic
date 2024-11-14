// script.js

// Adicionar nova tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    // Criar o texto da tarefa
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Contêiner para os botões de ação
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("task-actions");

    // Botão para marcar como concluída
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn", "btn-success", "btn-sm");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
            completeBtn.classList.add("completed-check");
        } else {
            completeBtn.classList.remove("completed-check");
        }
    };
    actionContainer.appendChild(completeBtn);

    // Botão de editar
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-warning", "btn-sm");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.onclick = function () {
        const newText = prompt("Editar tarefa:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
        }
    };
    actionContainer.appendChild(editBtn);

    // Botão de excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = function () {
        li.remove();
    };
    actionContainer.appendChild(deleteBtn);

    // Adicionar os botões de ação ao item de lista
    li.appendChild(actionContainer);

    // Adicionar a tarefa à lista
    taskList.appendChild(li);

    // Limpar o campo de input
    taskInput.value = "";
    taskInput.focus();
}
