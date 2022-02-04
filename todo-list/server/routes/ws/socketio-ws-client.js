const { io } = require('socket.io-client')

const sendMessage = require('./ws-server')

module.exports = function createClient(socketUrl, headers) {
  const socket = io(socketUrl, {
    protocols: ['rws_subscription'],
    extraHeaders: headers,
    withCredentials: true,
  })

  socket.on('error', (error) => {
    console.log('Connect Error:', JSON.stringify(error, null, 2))
    sendMessage('Connect Error: ' + JSON.stringify(error, null, 2))
  })

  socket.on('connect', () => {
    console.log('Server-Robot connection initiated.')
    sendMessage('Server-Robot connection initiated.')
  })

  socket.on('message', (data) => {
    //const message = JSON.parse(event.data)
    console.log('Message:', data)
    sendMessage('Message:', data)
  })
}
