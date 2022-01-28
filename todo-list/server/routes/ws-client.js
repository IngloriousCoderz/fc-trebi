const { w3cwebsocket: W3CWebSocket } = require('websocket')

const socket = require('./ws-server')

module.exports = function createClient(socketUrl, headers) {
  const client = new W3CWebSocket(socketUrl, 'rws_subscription', null, headers)

  client.onerror = (error) => {
    console.log('Connect Error: ' + JSON.stringify(error, null, 2))
    socket?.send('Connect Error: ' + error.toString())
  }

  client.onopen = () => {
    console.log('WebSocket Client Connected')
    socket?.send('WebSocket Client Connected')
  }

  client.onclose = () => {
    console.log('Connection Closed')
    socket?.send('Connection Closed')
  }

  client.onmessage = (event) => {
    //const message = JSON.parse(event.data)
    console.log('Message:', event.data)
    socket?.send('Message:', event.data)
  }
}
