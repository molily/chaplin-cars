define([
  'views/base/view',
  'text!templates/car_item.hbs'
], function(View, template) {
  'use strict';

  var CarItemView = View.extend({
    template: template,
    tagName: 'li',
    className: 'car-item',
    listen: {
      'change model': 'render'
    }
  });

  return CarItemView;
});
