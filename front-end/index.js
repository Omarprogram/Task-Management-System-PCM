
function closePopup() {
  document.getElementById("popup").classList.remove("open-popup");
}

function openPopup() {
  document.getElementById("popup").classList.add("open-popup");
}

const tasksContainer = document.getElementById("tasksContainer");

function createTaskCard(title, desc) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-cointainer">
      <div class="card-contact">
        <h1>${title}</h1>
        <p>${desc}</p>
        <div class="inside-card">
          <label>Status:</label>
          <a href="#" class="delete-task">Delete</a>
        </div>
      </div>
    </div>
  `;

  tasksContainer.appendChild(card);
}


const addTaskBtn = document.getElementById("addTaskBtn");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");

addTaskBtn.addEventListener("click", () => {
  const title = taskTitle.value.trim();
  const desc = taskDesc.value.trim();

  if (!title || !desc) return;

  
  createTaskCard(title, desc);

  
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ title, desc });
  localStorage.setItem("tasks", JSON.stringify(tasks));

 
  closePopup();

  
  taskTitle.value = "";
  taskDesc.value = "";
});




window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.forEach(task => {
    createTaskCard(task.title, task.desc);
  });
});



document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-task")) {
    const card = e.target.closest(".card");
    card.remove();
  }
});

