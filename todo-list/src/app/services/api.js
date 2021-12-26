import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export async function fetchTasks() {
  const { data } = await http.get('tasks')
  return data
}

export async function addTask(body) {
  const { data } = await http.post('tasks', { data: body })
  return data
}

export async function updateTask(id, body) {
  const { data } = await http.put(`tasks/${id}`, { data: body })
  return data
}

export async function deleteTask(id) {
  const { data } = await http.delete(`tasks/${id}`)
  return data
}
