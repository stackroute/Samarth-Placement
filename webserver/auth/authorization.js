// RBAC
var  RBAC = require('rbac').default;

const rbac = new RBAC({
  roles: ['admin', 'coordinator', 'candidate'],
  permissions: {
    sidenav:['read'],
    jobs: ['create', 'read', 'edit', 'delete'],
    coordinator: ['create', 'read', 'edit', 'delete']
   },
  grants: {
    candidate: ['read_sidenav', 'read_jobs'],
    coordinator: ['read_sidenav', 'create_jobs', 'read_jobs', 'edit_jobs', 'delete_jobs'],
    admin: ['coordinator', 'create_coordinator', 'read_coordinator', 'edit_coordinator', 'delete_coordinator']

  }
}, function(err, rbacInstance) {
  if (err) {
    throw err;
  }
});

function isAuthorized(req, res, next, role, accesslevel, target){
  // console.log(req.decoded);
  rbac.can(role, accesslevel, target, (err, can) => {

  if (err) {
    res.send(err);
  }

  if (can) {
    next();
  } else {
      res.status(403).send("Not authorized");
    }
});
}

module.exports = {
  isAuthorized : isAuthorized
}
