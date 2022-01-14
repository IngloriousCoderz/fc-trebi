const express = require('express')
const router = express.Router()

const db = require('../db/static')

const { Server } = require('ws')

let socket = null

const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })
pushServer.on('connection', (s) => {
  socket = s
  const tasks = db.find()
  socket.send(JSON.stringify(tasks))
})

router.get('/', (req, res) => {
  const tasks = db.find()
  res.send(tasks)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = db.findOne(id)
  res.send(task)
})

router.post('/', (req, res) => {
  const task = db.create(req.body)
  const tasks = db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = db.replace(id, req.body)
  const tasks = db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = db.update(id, req.body)
  const tasks = db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  const task = db.delete(id)
  const tasks = db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

module.exports = router
