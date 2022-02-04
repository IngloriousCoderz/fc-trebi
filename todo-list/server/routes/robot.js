const { parseString } = require('xml2js')
const express = require('express')
const router = express.Router()
const createWSClient = require('./ws')
const { http, host } = require('./rest-client')
require('./ftp-client')

router.get('/*', async (req, res) => {
  const endpoint = req.params['0']
  const { data } = await http.get(host + endpoint)
  res.send(data)
})

router.post('/ctrl/backup', async (req, res) => {
  const { headers } = await http.post(
    `${host}ctrl/backup`,
    new URLSearchParams(req.body).toString(),
    {
      headers: {
        accept: 'application/json+hal,v2.0',
        'content-type': 'application/x-www-form-urlencoded',
      },
      params: req.query,
    }
  )

  res.send({ location: headers.location })
})

router.post('/subscription', async (req, res) => {
  const { headers, data } = await http.post(
    `${host}subscription`,
    new URLSearchParams(req.body).toString(),
    {
      headers: {
        accept: 'application/json+hal,v2.0',
        'content-type': 'application/x-www-form-urlencoded',
      },
      params: req.query,
    }
  )

  const result = await parse(data)
  const socketUrl = result.body[0].div[0].a[1].$.href

  console.log(socketUrl, headers)
  //createWSClient(socketUrl, headers)
})

router.post('/*', async (req, res) => {
  const endpoint = req.params['0']
  const { data } = await http.post(
    `${host}${endpoint}`,
    new URLSearchParams(req.body).toString(),
    {
      headers: {
        accept: 'application/json+hal,v2.0',
        'content-type': 'application/x-www-form-urlencoded',
      },
      params: req.query,
    }
  )

  res.send(data)
})

module.exports = router

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
