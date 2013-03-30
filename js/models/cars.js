define([
  'models/base/collection',
  'models/car'
], function(Collection, Car) {
  'use strict';

  var seed = [
    { id: 0, name: 'DeLorean DMC-12', manufactured: 1981 },
    { id: 1, name: 'Chevrolet Corvette', manufactured: 1953 },
    { id: 2, name: 'VW Scirocco', manufactured: 1974 },
    { id: 3, name: 'Opel Manta', manufactured: 1970 },
    { id: 4, name: 'Aston Martin DB5', manufactured: 1963 },
    { id: 5, name: 'Rolls-Royce Phantom II', manufactured: 1929 },
    { id: 6, name: 'Maserati GranTurismo', manufactured: 2007 }
  ];

  var Cars = Collection.extend({

    model: Car,

    localStorageKey: 'cars',

    // Simple fetch logic without events, callbacks or error handling.
    fetch: function() {
      // Try to read from localStorage.
      var savedCars = window.localStorage.getItem(this.localStorageKey);
      if (savedCars) {
        savedCars = JSON.parse(savedCars);
      }

      // Only use the localStorage if there are records.
      // When all cars have been deleted, go back to start.
      var cars = savedCars && savedCars.length ? savedCars: seed;

      this.reset(cars);
    },

    save: function() {
      // Assign IDs to new model.
      var newModels = this.where({ id: undefined });
      var id = this.max(function(model) { return model.id }).id;
      _.each(newModels, function (newModel) {
        newModel.set('id', ++id);
      })
      //console.log('Cars#save', JSON.stringify(this));
      window.localStorage.setItem(this.localStorageKey, JSON.stringify(this));
    }

  });

  return Cars;
});
