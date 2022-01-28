const { Server } = require('ws')

let socket = null

const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })

pushServer.on('connection', (s) => {
  socket = s
  socket.send('WebSocket connection initiated.')
})

module.exports = socket
