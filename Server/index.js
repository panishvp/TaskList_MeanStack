var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
const route = require('./route/routes');

//connection to mongodb
mongoose.connect('mongodb://localhost:27017/tasklist');

//on connection
mongoose.connection.on('connected', ()=> {
  console.log('connected to mongodb');
});

mongoose.connection.on('error', (err)=>{
  console.console.log(err);
});

//port at which server running
const PORT = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);

app.listen(PORT, ()=>{
  console.log('server started');
})

app.get('/',(req,res) => {
  res.send('Hello World!');
})
