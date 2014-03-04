define([
  'views/base/view',
  'text!templates/edit_car.hbs',
  'chaplin'
], function(View, template, Chaplin) {
  'use strict';

  var EditCarView = View.extend({

    template: template,

    autoRender: true,
    className: 'edit-car',
    container: '#page-container',

    listen: {
      addedToDOM: 'focusName'
    },

    events: {
      'submit form': 'save'
    },

    focusName: function() {
      var $input = this.$('.input-name');
      var nameLength = $input.val().length;
      $input.focus().prop({
        selectionStart: nameLength
      });
    },

    save: function(event) {
      event.preventDefault();
      // Shortcuts
      var model = this.model;
      var collection = this.collection;
      // Update model
      model.set({
        name: this.$('.input-name').val(),
        manufactured: this.$('.input-manufactured').val()
      });
      // Add model to collection
      if (!collection.get(model)) {
        collection.push(model);
      }
      // Save the model
      collection.save();
      // Back to overview
      Chaplin.utils.redirectTo({ name: 'cars' });
    }

  });

  return EditCarView;
});
