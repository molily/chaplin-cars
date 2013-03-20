define([
  'views/base/view',
  'text!templates/car.hbs'
], function(View, template) {
  'use strict';

  var CarView = View.extend({
    template: template,
    autoRender: true,
    className: 'car',
    container: '#page-container'
  });

  return CarView;
});
