define([
  'backbone',
  'localStorage',
  'config'
], function (Backbone, LocalStorage, config) {
  'use strict';

  var NoteCollection = Backbone.Collection.extend({
    localStorage: new LocalStorage(config.storeName),
    toString: 'lAlAlA'
  });

  return NoteCollection;
});