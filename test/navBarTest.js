var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8080'

container=request(host_url);
var msg={"role":"coordinator","sidenavmenuitems":[{"icon":"dashboard","navTitle":"Dashboard","traverse":"index.dashboard"},{"icon":"search","navTitle":"Candidate Search","traverse":"index.candidatesearch"},{"icon":"person_add","navTitle":"Candidate Register","traverse":"index.candidateReg"},{"icon":"add box","navTitle":"Job Post","traverse":"index.jobPost"},{"icon":"youtube_searched_for_black","navTitle":"Job Search","traverse":"index.jobSearch"},{"icon":"person_pin","navTitle":"JobProvider Registration","traverse":"index.empreg"}]};
var container_url = host_url + '/sidenavbar';
	describe(' checking navbar', function(){
		
		it("we should get the response while calling",function(done) {
			console.log(container_url);
      container
        .get('/sidenavbar')
        .expect(200, done)

});

	it('should be json response', function(done) {
      container
        .get('/sidenavbar')
        .expect('Content-Type', 'application/json; charset=utf-8', done);

    });
	
	it('we should get the response', function(done) {
      container
        .get('/sidenavbar')
        .expect(msg, done);
    });
	});

	describe('something slow',function(){
		this.slow(10000);

  it('should take less tha 301ms time for me....', function(done) {
    setTimeout(done, 250);
  });
});


 