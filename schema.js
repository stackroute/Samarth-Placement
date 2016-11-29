var mongoose = require('mongoose');

var engine = mongoose.Schema({
  Profession_name : String,

});
var EngineCollection = mongoose.model('EngineCollection', engine);
module.exports=EngineCollection;
