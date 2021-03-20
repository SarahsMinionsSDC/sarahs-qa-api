const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'qa'
})

client.connect(() => (console.log('CONNECTED!')))

module.exports = client