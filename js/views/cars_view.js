define([
  'views/base/collection_view',
  'views/car_item_view'
], function(CollectionView, CarItemView) {
  'use strict';

  var CarsView = CollectionView.extend({
    tagName: 'ol',
    className: 'cars',
    container: '#page-container',
    itemView: CarItemView,
    animationDuration: 50
  });

  return CarsView;
});
