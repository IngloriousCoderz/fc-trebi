import { useState } from "react";
import classes from "./app.module.css";

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTasks([...tasks, { id: 4, text: "New task" }]);
  };

  return (
    <>
      <h1>{name}'s To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="What next?" autoFocus />
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span className={completed ? classes.completed : null}>{text}</span>
            &nbsp;
            <button>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
