const { Server } = require('ws')

let socket

module.exports = {
  init() {
    const pushServer = new Server({ port: process.env.SOCKET_PORT || 3002 })
    pushServer.on('connection', async (s) => {
      socket = s
      const { results: tasks } = await strapi.service('api::task.task').find()
      socket.send(JSON.stringify(tasks))
    })
  },

  async send(tasks) {
    socket?.send(JSON.stringify(tasks))
  },
}
