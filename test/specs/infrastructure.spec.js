define([
  'chai',
  'sinon'
], function(chai, sinon) {
  var expect = chai.expect;

  var mock = {};
  mock.hello = function() {
    return 'Hello World';
  };

  describe('Test to verify the testing infrastructure is running', function() {
    describe('chai.js', function() {
      it('should be equal using "expect"', function() {
        expect(mock.hello()).to.equal('Hello World');
      });
    });

    describe('sinon.js', function() {
      it('should report spy called', function() {
        // jshint expr:true
        var hello_spy = sinon.spy(mock, 'hello');
        expect(hello_spy.called).to.be.false;
        mock.hello();
        expect(hello_spy.called).to.be.true;
        mock.hello.restore();
      });
    });
  });
});
