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

    beforeAction: function () {
      // Create a new Cars collection or preserve the existing.
      // This prevents the Cars collection from being disposed
      // in order to share it between controller actions.
      var cars = this.reuse('cars', Cars);

      // Fetch collection from storage if it’s empty.
      if (cars.length == 0) {
        cars.fetch();
      }
    },

    index: function() {
      //console.log('CarsController#index');
      var cars = this.reuse('cars');
      this.view = new CarsView({ collection: cars });
    },

    show: function(params) {
      //console.log('CarsController#show');
      var cars = this.reuse('cars');
      var car = cars.get(params.id);
      this.view = new CarView({ model: car });
    },

    edit: function(params) {
      //console.log('CarsController#edit');
      var cars = this.reuse('cars');
      var car = cars.get(params.id);
      this.view = new EditCarView({ model: car, collection: cars });
    },

    'new': function() {
      //console.log('CarsController#new');
      var car = new Car();
      var cars = this.reuse('cars');
      this.view = new EditCarView({ model: car, collection: cars });
    }

  });

  return CarsController;
});
