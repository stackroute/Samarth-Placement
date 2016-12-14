var assert = require('chai').assert;
var request = require('supertest');
var host_url = 'http://localhost:8081'
container=request(host_url+'/jobProfile/');
describe('JobSearch test cases',function(){
describe('checking API calling',function(){
    describe(' checking job profile', function(){
        it("we should get the response while calling",function(done) {
        container
        .get('/getJobs')
        .expect(200, done)
    });
    it('should be json response', function(done) {
      container
        .get('/getJobs')
        .expect('Content-Type', 'application/json; charset=utf-8', done);
    });
    it('we should get the response', function(done) {
      container
        .get('/getJobs')
        .expect(msg, done);
    });
    it("we making call to wrong api and checking status for 404 status",function(done) {
            container
        .get('/getJob')
        .expect(404,done)
    });
    });
});
describe('Duration ', function(){
    describe('something slow',function(){
        this.slow(10000);

  it('should take less tha 301ms time for me....', function(done) {
    setTimeout(done, 250);
  });
});
});
});
