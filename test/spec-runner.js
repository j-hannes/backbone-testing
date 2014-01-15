require.config({
  paths: {
    jquery: 'components/jquery/jquery',

    // testing libraries
    mocha: 'components/mocha/mocha',
    chai:  'components/chai/chai',
    sinon: 'components/sinonjs/sinon',
  },

  shim: {
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
], function($, mocha) {
  'use strict';

  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  var specs = [];
  specs.push('specs/infrastructure.spec');

  $(document).ready(function() {
    require(specs, function() {
      mocha.run();
    });
  });
});
