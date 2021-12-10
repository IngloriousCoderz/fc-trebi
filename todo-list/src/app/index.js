import { useState } from "react";
import classes from "./app.module.css";

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(addTask(tasks, text));
    setText("");
  };

  const addTask = (tasks, text) => {
    const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
    return [...tasks, { id: maxId + 1, text }];
  };

  const handleSpanClick = (id) => (event) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleButtonClick = (id) => (event) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{name}'s To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={completed ? classes.completed : null}
              onClick={handleSpanClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
