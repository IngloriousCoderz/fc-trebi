const express = require('express')
const router = express.Router()
const debug = require('debug')('server:server')

const { Server } = require('ws')

const tasks = [
  { id: 1, text: 'Learn Express', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
]

let socket = null

const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })
pushServer.on('connection', (s) => {
  socket = s
  debug('Socket server sending initial data')
  socket.send(JSON.stringify(tasks))
})

router.get('/', (req, res) => {
  socket?.send(JSON.stringify(tasks))
  res.send(tasks)
})

router.get('/:id', (req, res) => {
  const index = findIndex(tasks, req)
  socket?.send(JSON.stringify(tasks))
  res.send(tasks[index])
})

router.post('/', (req, res) => {
  const maxId = tasks.length ? tasks[tasks.length - 1].id : 0
  const task = { ...req.body, id: maxId + 1 }
  tasks.push(task)
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.put('/:id', (req, res) => {
  const index = findIndex(tasks, req)
  tasks[index] = { ...req.body, id: tasks[index].id }
  socket?.send(JSON.stringify(tasks))
  res.send(tasks[index])
})

router.patch('/:id', (req, res) => {
  const index = findIndex(tasks, req)
  tasks[index] = { ...tasks[index], ...req.body }
  socket?.send(JSON.stringify(tasks))
  res.send(tasks[index])
})

router.delete('/:id', (req, res) => {
  const index = findIndex(tasks, req)
  const task = tasks[index]
  tasks.splice(index, 1)
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

module.exports = router

function findIndex(tasks, req) {
  return tasks.findIndex(({ id }) => id === Number(req.params.id))
}
