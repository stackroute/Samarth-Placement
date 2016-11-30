var express=require('express');
var app=express();
var path=require('path');
var profobject=require('./webapp/coordinatorReg/json/prof.js');
var bodyParser = require('body-parser');
// var Bear     = require('./bear.js');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'webapp')))
app.use(express.static(path.join(__dirname, 'bower_components')))

app.get('/',function(req,res){
	res.sendFile(path.resolve(__dirname,'index.html'))
 //    res.send("hello");
});
app.get('/createaccount',function(req,res){
    res.send(profobject);
});

app.get('/createaccount/submit',function(req,res){
	console.log("cdgsxhajs")
    res.send();
});

// var router = express.Router();

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

// router.use(function(req, res, next) {
//     
//     console.log('Something is happening.');
//     next();
// });

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// router.route('/bears')


//     .post(function(req, res) {
        
//         var bear = new Bear();
//         bear.name = req.body.name;


//         bear.save(function(err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Bear created!' });
//         });
        
//     });

// app.use('/api', router);

app.listen(port);
