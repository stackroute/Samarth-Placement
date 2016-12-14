var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8080'
var container_url = host_url + '/candidate/';
var sampelCandidate={"dob": "2016-11-30T18:30:00.000Z",
  "email": "hari@hari.com",
  "gender": "Male",
  "location": "Bangalore",
  "name": "hariprasath",
  "mobile": "5555578955",
  "profession":"retail"
}

describe('API calls', function() {

  describe('Profession responce', function() {
    container = request(container_url);
    it('should response while calling', function(done) {
      container
        .get('/profession')
        .expect(200, done)

    });
    it('should be json response', function(done) {
      container
        .get('/profession')
        .expect('Content-Type', 'application/json; charset=utf-8', done);

    });
  });
});

describe('Candidate registration in Database', function() {

  describe('Candidate registration with exiting data', function() {
    container = request(container_url);

    it('should throw error for same register id which is already registered', function(done) {
      container
        .post('/')
        .type('form')
        .send(sampelCandidate)
        .set('Accept', /application\/json/)
        .expect(500, done)

    });
  
  });
});