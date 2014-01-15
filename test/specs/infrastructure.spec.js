define([
  'chai',
  'sinon'
], function(chai, sinon) {
  var expect = chai.expect;

  window.hello = function() {
    return 'Hello World';
  };

  describe('Test to verify the testing infrastructure is running', function() {
    describe('chai.js', function() {
      it('should be equal using "expect"', function() {
        expect(hello()).to.equal('Hello World');
      });
    });

    describe('sinon.js', function() {
      it('should report spy called', function() {
        // jshint expr:true
        var hello_spy = sinon.spy(window, 'hello');
        expect(hello_spy.called).to.be.false;
        hello();
        expect(hello_spy.called).to.be.true;
        hello.restore();
      });
    });

    describe('Test timing', function() {
      it('should be a fast test', function(done) {
        expect('hi').to.equal('hi');
        done();
      });

      it('should be a medium test', function(done) {
        setTimeout(function() {
          expect('hi').to.equal('hi');
          done();
        }, 40);
      });

      it('should be a slow test', function(done) {
        setTimeout(function() {
          expect('hi').to.equal('hi');
          done();
        }, 100);
      });

      it('should be a timeout failure', function(done) {
        setTimeout(function() {
          expect('hi').to.equal('hi');
          done();
        }, 2001);
      });
    });

    describe('Test failures', function() {
      it('should fail on assertion', function() {
        expect('hi').to.equal('goodbye');
      });

      it('should fail on unexpected exception', function() {
        throw new Error();
      });
    });
  });

});
