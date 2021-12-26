const express = require('express')
const router = express.Router()
const debug = require('debug')('server:server')
const db = require('../db/index')

const { Server } = require('ws')

let socket = null

const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })
pushServer.on('connection', async (s) => {
  socket = s
  debug('Socket server sending initial data')
  const tasks = await db.find()
  socket.send(JSON.stringify(tasks))
})

router.get('/', async (req, res) => {
  const tasks = await db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(tasks)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const tasks = await db.find()
  const task = await db.findOne(id)
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.post('/', async (req, res) => {
  const task = await db.create(req.body)
  const tasks = await db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const task = await db.replace(id, req.body)
  const tasks = await db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const task = await db.update(id, req.body)
  const tasks = await db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const task = await db.delete(id)
  const tasks = await db.find()
  socket?.send(JSON.stringify(tasks))
  res.send(task)
})

module.exports = router
