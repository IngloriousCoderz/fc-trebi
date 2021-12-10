import { useState } from 'react'

import AppComponent from './app'

function App({ name }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ])

  const handleSubmit = (text) => {
    setTasks(addTask(tasks, text))
  }

  const addTask = (tasks, text) => {
    const maxId = tasks.length ? tasks[tasks.length - 1].id : 0
    return [...tasks, { id: maxId + 1, text }]
  }

  const handleSpanClick = (id) => (event) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleButtonClick = (id) => (event) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <AppComponent
      name={name}
      tasks={tasks}
      onSubmit={handleSubmit}
      onSpanClick={handleSpanClick}
      onButtonClick={handleButtonClick}
    />
  )
}

export default App
