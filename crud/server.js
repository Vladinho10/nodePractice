const path = require("path")
, fs = require("fs")
, url = require("url")
, bodyParser = require("body-parser")
, express = require("express")
, app = express()
, Router = express.Router()
, _port = 3000
, mongodb = require("mongodb")
, MongoClient = require('mongodb').MongoClient
// const mongoose = require("mongoose")
, consolidate = require("consolidate")
, _urlDB = "mongodb://Vlad10:1@localhost:27017/";

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // parse application/x-www-form-urlencoded
  extended: false
}));
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "./view"));

let db;
MongoClient.connect(_urlDB, (err, client)=>{
  if (err) throw err;
  db = client.db('createUser');
  // client.close();
});

Router.route('/').post((req, res)=>{
  // console.log(req.body);
  db.collection('users').insertOne(req.body);
  res.redirect('/');
});

app.use('/', Router);

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname,'/index.html'));
  res.render("index.hbs", {
      message: 'hello hbs'
  });
});

app.get('/test', (req, res) => {
  res.render("test.hbs", {
      message: 'hello hbs'
  });
});

app.get('/getTable', (req, res) => {
console.log('*************');

  db.collection('users').find({}).toArray((err, docs)=>{
    if (err) throw err;
    console.log(docs);
    console.log(docs.length);
    res.render('table.hbs', {
      // docs: JSON.stringify(docs)
      docs: docs
    })
    // res.send(JSON.stringify(docs) );
  })

});




app.listen(_port, () => console.log(`${_port}`));
