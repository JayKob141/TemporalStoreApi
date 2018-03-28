#!/bin/bash

npm install
./node_modules/.bin/sequelize db:migrate
./node_modules/.bin/sequelize db:seed:all
node src/express/index.js
