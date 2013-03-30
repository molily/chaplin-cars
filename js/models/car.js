define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Car = Model.extend({

    defaults: {
      name: '',
      year: new Date().getFullYear()
    }

  });

  return Car;
});
