var assert = require('chai').assert;
var request = require('supertest');
var host_url = 'http://localhost:8081'
var container=request(host_url+'/jobProfile/');
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
        .get('/searchJobs')
        .expect(200, done);
    });
    it("we should get the response for jobsByProfession",function(done) {
            container
        .get('/jobsByProfession')
        .expect(200,done)
    });
    });
});
// describe('Duration ', function(){
//     describe('something slow',function(){
//         this.slow(100000);

//   it('should take less tha 20000ms time for me....', function(done) {
//     setTimeout(done, 250000);
//   });
// });
// });
});
