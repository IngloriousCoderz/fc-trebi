import { useEffect, useState } from 'react'

import AppComponent from './app'

import * as api from './services/api'

function App({ name }) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const tasks = await api.fetchTasks()
    setTasks(tasks)
  }

  const handleSubmit = async (text) => {
    const task = await api.addTask({ text })
    setTasks([...tasks, task])
    // fetchTasks()
  }

  const handleSpanClick = (id) => async (event) => {
    const { completed } = tasks.find((task) => task.id === id)

    await api.updateTask(id, { completed: !completed })
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
    // fetchTasks()
  }

  const handleButtonClick = (id) => async (event) => {
    await api.deleteTask(id)
    setTasks(tasks.filter((task) => task.id !== id))
    // fetchTasks()
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
