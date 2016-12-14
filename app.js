let proxy = require('http-proxy');
let express=require('express');
let path=require('path');
let morgan = require('morgan');

let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');

let profobject=require('./webapp/coordinatorReg/json/prof.js');
let navItems = require('./webserver/navbar/navigateRouter.js');

let authRoutes = require('./webserver/auth/authrouter');
let authByToken = require('./webserver/auth/authbytoken');

mongoose.connect('mongodb://localhost:27017/samarthplatformdb');
mongoose.set('debug', true);

let app=express();

let port = process.env.PORT || 8080;

let platformProxy = proxy.createProxyServer();

app.onAppStart = function(addr) {
  console.log("Samarth-Placement web app is now Running on port:", addr.port);
}

app.use(cookieParser());
app.use(morgan('dev'));
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