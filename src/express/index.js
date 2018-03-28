const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json())

const routes = require('./routes')(app);

app.listen(3000, () => console.log('example shop-api listening on port 3000!'))