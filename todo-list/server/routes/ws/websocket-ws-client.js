const { w3cwebsocket: W3CWebSocket } = require('websocket')

const sendMessage = require('./ws-server')

module.exports = function createClient(socketUrl, headers) {
  const client = new W3CWebSocket(socketUrl, 'rws_subscription', null, headers)

  client.onerror = (error) => {
    console.log('Connect Error:', JSON.stringify(error, null, 2))
  }

  client.onopen = () => {
    console.log('WebSocket Client Connected')
    sendMessage('WebSocket Client Connected')
  }

  client.onclose = () => {
    console.log('Connection Closed')
    sendMessage('Connection Closed')
  }

  client.onmessage = (event) => {
    //const message = JSON.parse(event.data)
    console.log('Message:', event.data)
    sendMessage('Message:', event.data)
  }
}
