const { Server } = require('ws')

let socket = null

const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })

pushServer.on('connection', (s) => {
  socket = s
  socket.send('Client-server connection initiated.')
})

function sendMessage(message) {
  socket?.send(message)
}

module.exports = sendMessage
