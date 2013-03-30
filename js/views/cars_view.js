define([
  'views/base/collection_view',
  'views/car_item_view',
  'text!templates/cars.hbs'
], function(CollectionView, CarItemView, template) {
  'use strict';

  var CarsView = CollectionView.extend({

    template: template,

    itemView: CarItemView,

    className: 'cars',
    container: '#page-container',
    listSelector: 'ol',
    animationDuration: 0,

  });

  return CarsView;
});