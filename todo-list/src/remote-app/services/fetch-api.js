const baseUrl = 'http://localhost:3001'

export async function fetchTasks() {
  const response = await fetch(`${baseUrl}/tasks`)
  const tasks = await response.json()
  return tasks
}

export async function addTask(body) {
  const response = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const task = await response.json()
  return task
}

export async function updateTask(id, body) {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

export async function deleteTask(id) {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}
