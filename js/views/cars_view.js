define([
  'views/base/collection_view',
  'views/car_item_view',
  'text!templates/cars.hbs'
], function(CollectionView, CarItemView, template) {
  'use strict';

  var CarsView = CollectionView.extend({
    className: 'cars',
    container: '#page-container',
    listSelector: 'ul',
    template: template,
    events: {
      'click .set-collection': 'setCollection'
    },
    initItemView: function (model) {
      var view = new CarItemView({ model: model });
      this.listenTo(view, 'delete', this.modelDeleted);
      return view;
    },
    animationDuration: 0,
    modelDeleted: function (model) {
      this.collection.remove(model);
    },
    setCollection: function () {
      this.trigger('setCollection');
    }
  });

  return CarsView;
});
