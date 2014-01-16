define([
  'models/note-model',
  'chai'
], function(NoteModel, chai) {
  var expect = chai.expect;

  describe('Node :: Model', function() {
    var model = new NoteModel();

    it('exists', function() {
      expect(model).to.exist;
    });

    it('has default values', function() {
      expect(model.get('title')).to.equal('');
      expect(model.get('text')).to.equal('*Edit your note!*');
      expect(model.get('createdAt')).to.be.a('Date');
    });
  });
});