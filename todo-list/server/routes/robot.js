const express = require('express')
const router = express.Router()

const { default: AxiosDigest } = require('axios-digest')

const HOST = 'http://192.168.2.31/'

const axios = new AxiosDigest('Default User', 'robotics')

router.get('/*', async (req, res) => {
  const endpoint = req.params['0']
  const { data } = await axios.get(HOST + endpoint)
  res.send(data)
})

router.post('/*', async (req, res) => {
  const endpoint = req.params['0']
  const { headers, data } = await axios.post(
    HOST + endpoint,
    new URLSearchParams(req.body).toString(),
    {
      headers: {
        accept: 'application/json+hal,v2.0',
        'content-type': 'application/x-www-form-urlencoded',
      },
      params: req.query,
    }
  )
  res.send({ headers, data })
})

module.exports = router
