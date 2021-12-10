import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export async function fetchTasks() {
  const { data } = await http.get('tasks')
  return data
}

export async function addTask(body) {
  const { data } = await http.post('tasks', body)
  return data
}

export async function updateTask(id, body) {
  const { data } = await http.patch(`tasks/${id}`, body)
  return data
}

export async function deleteTask(id) {
  const { data } = await http.delete(`tasks/${id}`)
  return data
}
