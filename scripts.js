document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerBtn').addEventListener('click', function() {
        const name = document.getElementById('nameInput').value;
        if (name.trim() !== "") {
            document.getElementById('welcomeMessage').textContent = `Bem-vindo, ${name}!`;
            document.getElementById('registration').style.display = 'none';
            document.getElementById('todoApp').style.display = 'block';
        } else {
            alert("Por favor, insira um nome.");
        }
    });

    document.getElementById('addTaskBtn').addEventListener('click', function() {
        const taskText = document.getElementById('taskInput').value;
        if (taskText.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = taskText;

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('task-actions');

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Concluir';
            completeBtn.classList.add('completeBtn');
            completeBtn.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Remover';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            actionsDiv.appendChild(completeBtn);
            actionsDiv.appendChild(deleteBtn);
            li.appendChild(actionsDiv);

            document.getElementById('taskList').appendChild(li);
            document.getElementById('taskInput').value = "";
        } else {
            alert("Por favor, insira uma tarefa.");
        }
    });
});
