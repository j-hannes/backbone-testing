define([
  'models/note-model',
  'chai'
], function (NoteModel, chai) {
  'use strict';
  
  var expect = chai.expect;

  describe('Note :: Model', function () {
    var model = new NoteModel();

    it('exists', function () {
      expect(model).to.exist;
    });

    it('has default values', function () {
      expect(model.get('title')).to.equal('');
      expect(model.get('text')).to.equal('*Edit your note!*');
      expect(model.get('createdAt')).to.be.a('Date');
    });
  });
});