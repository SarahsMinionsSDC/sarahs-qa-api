const { Client } = require('pg')
const login = require('./dblogin.js')

const client = new Client(login)
client.connect(() => (console.log('CONNECTED!')))