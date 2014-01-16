define([
  'backbone'
], function(Backbone) {
  var NodeModel = Backbone.Model.extend({
    defaults: {
      title: '',
      text: '*Edit your note!*',
      createdAt: new Date()
    }

  });

  return NodeModel;
});