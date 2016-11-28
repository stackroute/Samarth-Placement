var express=require('express');
var app = express();
var path=require('path');
var obj=require('./webapp/dashboard/data.js');
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var port=process.env.PORT||8080;
app.use(express.static(path.join(__dirname,'webapp')))
app.get('/', function (req, res) {
      res.sendFile(path.resolve(__dirname,'./index.html'));
});
app.get('./dashboard/items',function()
{
console.log(obj);
res.send(obj);

});

app.listen(port);
