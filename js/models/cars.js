define([
  'chaplin',
  'models/base/collection'
], function(Chaplin, Collection) {
  'use strict';

  var Cars = Collection.extend();

  return Cars;
});
