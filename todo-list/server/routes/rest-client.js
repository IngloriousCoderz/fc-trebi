const { default: AxiosDigest } = require('axios-digest')

const HOST = 'http://192.168.2.31/'

const axios = new AxiosDigest('Default User', 'robotics')

module.exports = { http: axios, host: HOST }
