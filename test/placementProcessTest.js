/*const assert = require('chai').assert;
const request = require('supertest');
const host_url = 'http://172.23.238:8080'
const container_url = host_url + 'placementprocess/apply';

applyData={candidateid:"9770885264",jobname:"wipro-2"};

describe('Placement API', function(){
	let container = request(container_url);
	describe('apply a job', function() {
		it("should be respond",function(done) {
			container
			.post('/')
			.send(applyData)
			.expect(200, done)
		});

		it('should respose the status of the apply', function(done) {
			container
			.post('/signin')
			.send(applyData)
			.end(function(err,res){
				assert.equal(res.body.status,"applied");
				done();
			});
		});
	});

	describe('applied candidate list', function() {
		it("should be respond",function(done) {
			container
			.get('/wipro-2')
			.expect(200, done)
		});
	});

	describe('applied job list', function() {
		it("should be respond",function(done) {
			container
			.get('/9770885264')
			.expect(200, done)
		});
	});

});
*/