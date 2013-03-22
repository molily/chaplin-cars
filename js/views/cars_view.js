define([
  'views/base/collection_view',
  'views/car_item_view',
  'text!templates/cars.hbs'
], function(CollectionView, CarItemView, template) {
  'use strict';

  var CarsView = CollectionView.extend({
    className: 'cars',
    container: '#page-container',
    listSelector: 'ol',
    template: template,
    initItemView: function (model) {
      var view = new CarItemView({ model: model });
      this.listenTo(view, 'delete', this.modelDeleted);
      return view;
    },
    animationDuration: 0,
    modelDeleted: function (model) {
      this.collection.remove(model);
    }
  });

  return CarsView;
});
