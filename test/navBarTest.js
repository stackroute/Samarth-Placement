var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8080'

container=request(host_url);


	describe(' checking navbar', function(){
		
		it("we should get the response while calling",function(done) {
			console.log(container_url);
      container
        .get('/sidenavbar')
        .expect(200, done)

  
	
});


	describe('something slow',function(){
		this.slow(10000);

  it('should take less tha 301ms time for me....', function(done) {
    setTimeout(done, 250);
  });
});
});

 