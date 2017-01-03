const assert = require('chai').assert;
const request = require('supertest');

const host_url = 'http://localhost:8081'
const container_url = host_url + '/candidate';

const sampelCandidate={"dob": "2016-11-30T18:30:00.000Z",
  "email": "hari@hari.com",
  "gender": "Male",
  "location": "Bangalore",
  "name": "hariprasath",
  "mobile": "5555578955",
  "profession":"retail"
}
var container = request(container_url);
describe('API calls', function() {

  describe('Profession responce', function() {
    
    it('should response while calling', function(done) {
      console.log(container_url);
      container
        .get('/profession')
        .expect(200, done)

    });
    it('should be json response', function(done) {
      console.log(container_url);
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
      console.log(container_url);
      container
        .post('/')
        .type('form')
        .send(sampelCandidate)
        .set('Accept', /application\/json/)
        .expect(500, done)

    });
  
  });
});