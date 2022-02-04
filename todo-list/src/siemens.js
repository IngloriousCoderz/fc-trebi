import axios from 'axios'

const HOST = 'http://localhost:3001/siemens'

const http = axios.create({ baseURL: HOST })

init()

async function init() {
  await writeItem('Word1', 1000)
  readItems()
}

async function readItems() {
  const { data } = await http.get('items')
  console.log(data)
}

async function writeItem(name, value) {
  const { data } = await http.post('items', { name, value })
  console.log(data)
}
