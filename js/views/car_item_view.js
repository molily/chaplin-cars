define([
  'views/base/view',
  'text!templates/car_item.hbs',
  'models/car'
], function(View, template, Car) {
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
      var model = this.model;
      var collection = model.collection;
      // Remove the model from its collection. This disposes this item view.
      collection.remove(model);
      // Dispose the model explicitly. It shouldn’t be used elsewhere.
      model.dispose();
      collection.save();
    }

  });

  return CarItemView;
});
