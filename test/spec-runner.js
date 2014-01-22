require.config({
  paths: {
    jquery: 'components/jquery/jquery',
    underscore: 'components/underscore/underscore',
    backbone: 'components/backbone/backbone',
    localStorage: 'components/backbone.localStorage/backbone.localStorage',

    // testing libraries
    mocha: 'components/mocha/mocha',
    chai:  'components/chai/chai',
    sinon: 'components/sinonjs/sinon',

    // local components
    collections: 'scripts/collections',
    models: 'scripts/models',
    routers: 'scripts/routers',
    templates: 'scripts/templates',
    views: 'scripts/views',
    config: 'scripts/config'
  },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  }
});

require([
  'jquery',
  'mocha'
], function ($, mocha) {
  'use strict';

  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  var specs = [];
  specs.push('specs/infrastructure.spec');
  specs.push('specs/models/note-model.spec');
  specs.push('specs/collections/note-collection.spec');

  $(document).ready(function () {
    require(specs, function () {
      mocha.run();
    });
  });
});
