const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())

const routes = require('./routes')(app);

server = app.listen(3303, () => console.log('example shop-api listening on port 3303!'))

module.exports = server;