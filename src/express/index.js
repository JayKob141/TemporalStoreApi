const express = require('express')
const app = express()
const routes = require('./routes')(app);

app.listen(3000, () => console.log('example shop-api listening on port 3000!'))