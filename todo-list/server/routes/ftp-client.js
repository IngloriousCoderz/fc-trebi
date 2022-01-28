const Client = require('ftp')
const fs = require('fs')

const client = new Client()

client.on('ready', () => {
  copyFiles(
    'PROGMOD',
    '/hd0a/4600-109395/SYSPAR/4600-109395_BACKUP_2022-01-28/RAPID/TASK1/'
  )
  copyFiles(
    'SYSMOD',
    '/hd0a/4600-109395/SYSPAR/4600-109395_BACKUP_2022-01-28/RAPID/TASK1/'
  )
})

client.connect({
  host: '192.168.2.31',
  user: 'Default User',
  password: 'robotics',
})

function copyFiles(directory, path) {
  client.list(path + directory, (err, files) => {
    files.forEach(({ name }) => {
      client.get(`${path + directory}/${name}`, (err, stream) => {
        if (err) {
          return console.error(err)
        }

        stream.once('close', () => {
          client.end()
        })

        if (!fs.existsSync(`/Progetti/${directory}`)) {
          fs.mkdirSync(`/Progetti/${directory}`)
        }

        stream.pipe(fs.createWriteStream(`/Progetti/${directory}/${name}`))
      })
    })
  })
}
