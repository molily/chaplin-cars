define([
  'controllers/base/controller',
  'models/cars',
  'models/car',
  'views/cars_view',
  'views/car_view',
  'views/edit_car_view'
], function(Controller, Cars, Car, CarsView, CarView, EditCarView) {
  'use strict';

  var baseModels = [
    { id: 1, name: 'DeLorean DMC-12', manufactured: 1981 },
    { id: 3, name: 'VW Scirocco', manufactured: 1974 },
    { id: 5, name: 'Aston Martin DB5', manufactured: 1963 },
    { id: 7, name: 'Maserati GranTurismo', manufactured: 2007 }
  ];

  var allModels = [
    { id: 1, name: 'DeLorean DMC-12', manufactured: 1981 },
    { id: 2, name: 'Chevrolet Corvette', manufactured: 1953 },
    { id: 3, name: 'VW Scirocco NEW', manufactured: 1974 },
    { id: 4, name: 'Opel Manta', manufactured: 1970 },
    { id: 5, name: 'Aston Martin DB5', manufactured: 1963 },
    { id: 6, name: 'Rolls-Royce Phantom II', manufactured: 1929 },
    { id: 7, name: 'Maserati GranTurismo NEW', manufactured: 2007 }
  ];

  var CarsController = Controller.extend({

    beforeAction: {
      '.*': function () {
        this.compose('cars', Cars, baseModels);
      }
    },

    index: function() {
      //console.log('CarsController#index');
      var collection = this.compose('cars');
      this.view = new CarsView({ collection: collection });
      var setCollection = function () {
        collection.set(allModels);
      };
      this.view.on('setCollection', setCollection);
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
      this.view = new EditCarView({ model: model });
    },

    'new': function() {
      //console.log('CarsController#new');
      var model = new Car();
      var collection = this.compose('cars');
      collection.push(model);
      this.view = new EditCarView({ model: model });
    }

  });

  return CarsController;
});
