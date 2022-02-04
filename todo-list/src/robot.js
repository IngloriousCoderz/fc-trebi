import axios from 'axios'
import { format } from 'date-fns'
import { parseString } from 'xml2js'

const HOST = 'http://localhost:3001/robot'

const http = axios.create({ baseURL: HOST })

const socket = new WebSocket('ws://localhost:3002')
socket.addEventListener('open', () => {
  console.log('WebSocket to localhost:3002 opened.')
})
socket.addEventListener('message', (event) => {
  console.log('Incoming message:', event.data)
})

// fetchData()
//isBackupInProgress()
//createBackup()
//getDevices()
//copyDirectory()
//getSignal('DI034')
//getSignal('DI037')
//updateSignal('DO097', 0)
//subscribeToSignal('DO097')
//subscribeToSignal('DI037')

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

  subscribe(data.location)

  setTimeout(() => {
    isBackupInProgress()
  }, 1000)
}

async function subscribe(location) {
  const { data } = await http.post('subscription', {
    resources: 1,
    1: location,
    '1-p': 0,
  })

  console.log(data.message)
}

async function isBackupInProgress() {
  const { data } = await http.get('ctrl/backup', { action: 'backupstate' })

  const output = await parse(data)

  console.log(output)
}

async function getDevices() {
  const { data } = await http.get('fileservice')

  console.log(data)
}

async function copyDirectory() {
  //const PATH = 'fileservice/$home/copy-me'
  const PATH = 'fileservice/C/Progetti/copy-me'
  const { data } = await http.post(PATH, {
    'fs-overwrite': false,
    'fs-newname': 'copied-dir',
    'fs-action': 'copy',
  })

  console.log(data)
}

async function getSignal(name) {
  const { data } = await http.get(
    `rw/iosystem/signals/PROFINET/PN_Internal_Device/${name}`
  )

  const output = await parse(data)

  console.log(name, ':', output.body[0].div[0].ul[0].li[0].span[7]._)
}

async function updateSignal(name, value) {
  const { data } = await http.post(
    `rw/iosystem/signals/PROFINET/PN_Internal_Device/${name}?action=set`,
    { lvalue: value }
  )

  console.log(data)
}

async function subscribeToSignal(name) {
  const { data } = await http.post('subscription', {
    resources: 1,
    1: `/rw/iosystem/signals/PROFINET/PN_Internal_Device/${name};state`,
    '1-p': 0,
  })

  console.log(data.message)
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
