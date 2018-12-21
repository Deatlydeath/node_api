const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//constdb mogelijke problemen met vinden van de module
const db             = require('./config/db');
const mongoose       = require('mongoose');
const app            = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
  //bevestiging
  app.listen(port, () => {
    console.log('Poort ' + port + ' is nu live');
  });               
})