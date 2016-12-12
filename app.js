let proxy = require('http-proxy');
var express=require('express');
var app=express();
var path=require('path');
var profobject=require('./webapp/coordinatorReg/json/prof.js');
var navItems = require('./webserver/navbar/navigateRouter.js');

let authRoutes = require('./webserver/auth/authrouter');
let authByToken = require('./webserver/auth/authbytoken');

let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/samarthplatformdb');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

let platformProxy = proxy.createProxyServer();

app.onAppStart = function(addr) {
	console.log("Samarth-Placement web app is now Running on port:", addr.port);
}

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'webapp')))
app.use(express.static(path.join(__dirname, 'bower_components')))

app.use('/', authRoutes);
app.use('/', navItems);

app.use('/', function(req, res) {
	let options = {
    target: {
      host: 'localhost',
      port: 8081
    }
  };
  platformProxy.web(req, res, options);
});

platformProxy.on('error', function(err, req, res) {
  console.error('Error in proxy pass: ', err);
});

module.exports = app;