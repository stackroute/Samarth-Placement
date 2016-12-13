var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8081'

container=request(host_url);

describe('JobSearch test cases',function(){
describe('checking API calling',function(){
	describe(' checking job profile', function(){
		
		it("we should get the response while calling",function(done) {
			//console.log(container_url);
      container
        .get('/getJobs')
        .expect(200, done)

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
 