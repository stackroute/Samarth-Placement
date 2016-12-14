var assert = require('chai').assert;
var request = require('supertest');
var host_url = 'http://localhost:8080'
container=request(host_url);
var msg1={"email":"s@gmail.com","pwd":"shinder123"};
var msg2={"email":"ss@gmail.com","pwd":"shinder123"};
var msg3={"email":"s@gmail.com","pwd":"shinder123@"};
var msg4={"email":"","pwd":""};

	var container_url = host_url + '/signin';
		describe(' checking signin', function(){
				
				it("should return status ok",function(done) {
					 container
					 .post('/signin')
					 .send(msg1)
					 .expect(200, done)
        });

		    it('should be json response', function(done) {
		      container
			    .post('/signin')
			    .send(msg1)
			    .expect('Content-Type', 'application/json; charset=utf-8', done);
        });
		
        it('should give status 403', function(done) {
		      container
			   .post('/signin')
			   .send(msg2)
			   .expect(403, done);
        });	
		 	 	
		 	 	it('should give invalid credentials', function(done) {
		   	  container
			    .post('/signin')
			    .send(msg2)
			    .end(function(err,res){
		       assert.equal(res.body.error,"Invalid credentials...!");
		       done();
    		   });
        });

  		 	it('should give status 403', function(done) {
	    	container
			  .post('/signin')
			  .send(msg3)
			  .expect(403, done);
        });	

		 	 	it('should give invalid credentials', function(done) {
		    	container
			    .post('/signin')
			    .send(msg3)
			    .end(function(err,res){
		      assert.equal(res.body.error,"Invalid credentials...!");
		      done();
    		  });
			  });

	    it('should give status 401', function(done) {
		   	container
			  .post('/signin')
			  .send(msg4)
			  .expect(401, done);
       });
 
 			it(' should give try with valid credentials', function(done) {
   		  container
			  .post('/signin')
			  .send(msg4)
			  .end(function(err,res){
		    assert.equal(res.body.error,"Please try with valid credentials..!");
		    done();
     		 });
      });
		});
