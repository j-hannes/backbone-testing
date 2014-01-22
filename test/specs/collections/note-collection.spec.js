define([
  'chai',
  'collections/note-collection'
], function (chai, NoteCollection) {
  'use strict';

  var expect = chai.expect;

  describe('Note :: Collection', function () {

    // TODO: mock dependency of config to use another storeName 'notes-test'

    before(function () {
      // mock config object
      define('config', [], function () {
        return {
          storeName: 'notes-test'
        };
      });

      // create a reference for all internal specs
      this.notes = new NoteCollection();

      // for dev only
      expect(this.notes.localStorage.name).to.equal('notes-test');
      // clear existing data
      this.notes.localStorage._clear();
    });

    after(function () {
      delete this.notes;
    });

    describe('creation', function () {
      it('has default values', function () {
        expect(this.notes).to.exist; // default values??
        expect(this.notes).to.have.length(0); // when is this not the case??
      });

      it('should be empty on fetch', function (done) {
        var notes = new NoteCollection();

        notes.once('reset', function () {
          expect(notes).to.have.length(0);
          done();
        });

        notes.fetch({reset: true});
      });
    });

    describe('modification', function () {
      beforeEach(function () {
        this.notes.create({
          title: 'Test note #1',
          text: 'A pre-exisiting note from beforeEach.'
        });
      });

      afterEach(function () {
        this.notes.localStorage._clear();
        this.notes.reset();
      });

      it('has a single note', function (done) {
        var note;
        var notes = this.notes;

        notes.once('reset', function () {
          expect(notes).to.have.length(1);

          // Check model attributes
          note = notes.at(0); // are we not testing two things at once here??
          expect(note).to.be.ok; // this will always be true if the above
                                 // succeeds
          expect(note.get('title')).to.contain('#1');
          expect(note.get('text')).to.contain('pre-exisiting');

          done();
        });

        notes.fetch({reset: true});
      });

      it('can delete a note');
      it('an create a second note');
    });
  });
});