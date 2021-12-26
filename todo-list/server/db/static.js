const tasks = [
  { id: 1, text: 'Learn Express', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
]

module.exports = {
  find,
  findOne,
  create,
  replace,
  update,
  delete: remove,
}

function find() {
  return tasks
}

function findOne(id) {
  const index = findIndex(tasks, id)
  return tasks[index]
}

function create(body) {
  const maxId = tasks.length ? tasks[tasks.length - 1].id : 0
  const task = { ...body, id: maxId + 1 }
  tasks.push(task)
  return task
}

function replace(id, body) {
  const index = findIndex(tasks, id)
  tasks[index] = { ...body, id: tasks[index].id }
  return tasks[index]
}

function update(id, body) {
  const index = findIndex(tasks, id)
  tasks[index] = { ...tasks[index], ...body }
  return tasks[index]
}

function remove(id) {
  const index = findIndex(tasks, id)
  const task = tasks[index]
  tasks.splice(index, 1)
  return task
}

function findIndex(tasks, id) {
  return tasks.findIndex((task) => task.id === id)
}
