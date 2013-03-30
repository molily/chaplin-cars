define([
  'controllers/base/controller',
  'models/cars',
  'models/car',
  'views/cars_view',
  'views/car_view',
  'views/edit_car_view'
], function(Controller, Cars, Car, CarsView, CarView, EditCarView) {
  'use strict';

  var CarsController = Controller.extend({

    beforeAction: {
      '.*': function() {
        this.compose('cars', Cars);
        var collection = this.compose('cars');
        if (collection.length == 0) {
          collection.fetch();
        }
      }
    },

    index: function() {
      //console.log('CarsController#index');
      var collection = this.compose('cars');
      this.view = new CarsView({ collection: collection });
    },

    show: function(params) {
      //console.log('CarsController#show');
      var collection = this.compose('cars');
      var model = collection.get(params.id);
      this.view = new CarView({ model: model });
    },

    edit: function(params) {
      //console.log('CarsController#edit');
      var collection = this.compose('cars');
      var model = collection.get(params.id);
      this.view = new EditCarView({ model: model, collection: collection });
    },

    'new': function() {
      //console.log('CarsController#new');
      var model = new Car();
      var collection = this.compose('cars');
      this.view = new EditCarView({ model: model, collection: collection });
    }

  });

  return CarsController;
});
