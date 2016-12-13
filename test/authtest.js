var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8080'

container=request(host_url);
var msg=


{
    "email":"neha@gmail.com",
    "pwd":"neha123!"    
}
;

var container_url = host_url + '/signin';
    describe(' checking signin', function(){
        
        it("we should get the response while calling",function(done) {
            console.log(container_url);
     container
       .post('/signin')
       .send(msg)
       .expect(200, done)

});
    it('should be json response', function(done) {
     container
       .post('/signin')
       .send(msg)
       .expect('Content-Type', 'application/json; charset=utf-8', done);

   });
    
    it('should be json response', function(done) {
     container
       .post('/signin')
       .send(msg)
       .expect(200, done);

   });
    });




    describe('something slow',function(){
        this.slow(10000);

 it('should take less tha 301ms time for me....', function(done) {
   setTimeout(done, 250);
 });
});

