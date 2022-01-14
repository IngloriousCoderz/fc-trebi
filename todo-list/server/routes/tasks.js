const express = require('express')
const router = express.Router()

const tasks = [
  { id: 1, text: 'Learn Express', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
]

router.get('/', (req, res) => {
  res.send(tasks)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = tasks.find((task) => task.id === id)
  res.send(task)
})

router.post('/', (req, res) => {
  const maxId = tasks.length ? tasks[tasks.length - 1].id : 0
  const task = { ...req.body, id: maxId + 1 }
  tasks.push(task)
  res.send(task)
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = tasks.findIndex((task) => task.id === id)
  tasks[index] = { ...tasks[index], ...req.body }
  const task = tasks[index]
  res.send(task)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = tasks.findIndex((task) => task.id === id)
  const task = tasks[index]
  tasks.splice(index, 1)
  res.send(task)
})

module.exports = router
