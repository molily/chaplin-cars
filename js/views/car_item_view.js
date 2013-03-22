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
    },
    events: {
      'click .delete': 'delete'
    },
    'delete': function (event) {
      event.preventDefault();
      console.log('delete');
      this.trigger('delete', this.model);
    }
  });

  return CarItemView;
});
