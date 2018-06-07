var express = require("express");
var app = express();

var mysql = require("mysql");
var path = require("path");

var bodyParser = require('body-parser');
var template = require('consolidate');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./views")));

app.engine('twig', template.twig);
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, "./views"));
var config = require("./config");
var pool = mysql.createPool(config.db);

/**
 * Model
 * @type {{getUser, createUser}}
 */
var UserModel = require("./Model/User/user")(pool);


/**
 * Controllers
 */

var IndexController = require("./controllers/IndexController")(UserModel);

/**
 * Router
 */

app.get('/',IndexController.index);
app.post("/",IndexController.indexPost);


app.listen(8001,function () {
    console.log("Listen");
});

