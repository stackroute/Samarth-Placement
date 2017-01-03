var assert = require('chai').assert;
var request = require('supertest');

var host_url = 'http://localhost:8080';
var container=host_url+'/coordinatorreg/';
var container_post=host_url+'/coordinatorregister/';
var demoCoordinator={
  "name": "hariprasath",
  "email": "hari@hari.com",
  "gender": "Male",
  "mobile": "5555578955",
  "profession":"Retail",
  "pwd":"qwerty"
};

describe('get method', function() {
    hostt = request(container);
    it('should respond while calling coordinator ', function(done) {
      hostt
        .get('/profession')
        .expect(200, done)
    });
    it('should be json object', function(done) {
      hostt
        .get('/profession')
        .expect('Content-Type', 'application/json; charset=utf-8', done);
    });
    it('should respond while calling coordinator', function(done) {
      hostt
        .get('/role')
        .expect(200, done)
    });
    it('should be json object', function(done) {
      hostt
        .get('/role')
        .expect('Content-Type', 'application/json; charset=utf-8', done);
    });
    it('should respond while calling coordinator', function(done) {
      hostt
        .get('/language')
        .expect(200, done)
    });
    it('should be json object', function(done) {
      hostt
        .get('/language')
        .expect('Content-Type', 'application/json; charset=utf-8', done);
    });
  });

describe('Post data for coordinator registration', function() {
    host = request(container_post);

    it('should throw error for same register id which is already registered', function(done) {
      host
        .post('/createcoordinator')
        .type('form')
        .send(demoCoordinator)
        .set('Accept', /application\/json/)
        .expect(500, done)

    });
  
  });