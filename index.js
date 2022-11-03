const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mainPageRouter = require('./router/main.router')

const { connectSQl } = require('./db')
connectSQl();

app.listen(4001,'0.0.0.0', () => console.log('Example app listening on port 4001!'));
app.use(bodyParser())
app.use('/', mainPageRouter); 
