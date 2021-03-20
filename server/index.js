const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router.js')
const PORT = 4000
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;