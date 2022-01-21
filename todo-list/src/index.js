import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import axios from 'axios'
import { format } from 'date-fns'
import { parseString } from 'xml2js'

const HOST = 'http://localhost:3001/robot'

const http = axios.create({ baseURL: HOST })

//fetchData()
createBackup()

async function fetchData() {
  const { data } = await http.get('users')
  console.log(data)
  /*parseString(data, (err, { html }) =>
    console.log(html.body[0].div[0].ul[0].li.map((li) => li.a[0].$.href))
  )*/
}

async function createBackup() {
  const { data } = await http.post('ctrl/backup?action=backup', {
    backup: `/fileservice/$syspar/tempfolder-${format(
      new Date(),
      "yyyy-MM-dd'T'HH_mm_ss"
    )}`,
  })

  const { location } = data.headers

  subscribe(location)
}

async function subscribe(location) {
  const { data } = await http.post('subscription', {
    resources: 1,
    1: location,
    '1-p': 0,
  })

  const result = await parse(data.data)
  const socketUrl = result.body[0].div[0].a[1].$.href

  const socket = new WebSocket(socketUrl)
  socket.addEventListener('open', () => {
    console.log(`WebSocket to ${socketUrl} opened.`)
  })
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    console.log(message)
  })
}

async function isBackupInProgress() {
  const { data } = await http.get('ctrl/backup', { action: 'backupstate' })

  const output = await parse(data)

  console.log(output)
}

function parse(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, { html }) => {
      if (err) {
        return reject(err)
      }

      resolve(html) //.body[0])
    })
  })
}

/*ReactDOM.render(
  <React.StrictMode>
    <App name="Antony" />
  </React.StrictMode>,
  document.getElementById('root')
)*/
