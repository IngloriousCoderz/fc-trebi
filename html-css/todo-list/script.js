const tasks = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

const elements = tasks
  .map(
    (task) => `
<li id=${task.id}>
  <span${task.completed ? ' class="completed"' : ""}>${task.text}</span>
  <button>x</button>
</li>`
  )
  .join("");

const ul = document.querySelector("ul");
ul.innerHTML = elements;
