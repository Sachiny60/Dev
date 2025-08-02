function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.style.textDecoration = "line-through";

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
function clearAllTasks() {
  document.getElementById("taskList").innerHTML = "";
}


let pomodoroTime = 25 * 60; // 25 minutes in seconds
let currentTime = pomodoroTime;
let timerInterval = null;

function updatePomodoroDisplay() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        updatePomodoroDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("⏳ Time's up! Take a short break.");
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  currentTime = pomodoroTime;
  updatePomodoroDisplay();
}

// Initialize display on page load
window.onload = updatePomodoroDisplay;

// Notes Save Logic
function saveNote() {
  const note = document.getElementById("note-box").value;
  localStorage.setItem("savedNote", note);
  document.getElementById("saved-note").textContent = "✅ Note saved!";
}

function loadSavedNote() {
  const saved = localStorage.getItem("savedNote");
  if (saved) {
    document.getElementById("note-box").value = saved;
    document.getElementById("saved-note").textContent = "📂 Loaded saved note.";
  }
}

// Initialize all on page load
window.addEventListener("DOMContentLoaded", function () {
  updatePomodoroDisplay();
  loadSavedNote();
})
// form 
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("form-status").textContent = "✅ Thanks for your feedback!";
    document.getElementById("form-status").style.color = "green";

    // Optionally clear form
    event.target.reset();
  } else {
    document.getElementById("form-status").textContent = "❌ Please fill out all fields.";
    document.getElementById("form-status").style.color = "red";
  }
}

// Toggle
// Check saved mode on load
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
  }


