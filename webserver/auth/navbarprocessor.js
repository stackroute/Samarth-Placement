let objs = require('../navbar/navItems.json');
let data = {};
let sidenav = function(role){
  objs.roles.forEach(function(obj){
    if(obj.role == role){
      data =  obj;
    }
  })
  return data;
}
module.exports = {
  sidenav : sidenav
};
