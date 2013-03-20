define([
  'views/base/view',
  'text!templates/edit_car.hbs',
  'chaplin/mediator'
], function(View, template) {
  'use strict';

  var EditCarView = View.extend({
    template: template,
    autoRender: true,
    className: 'edit-car',
    container: '#page-container',
    events: {
      'submit form': 'save'
    },
    save: function(event) {
      console.log('EditCarView#save');
      event.preventDefault();
      this.model.set({
        name: this.$('.input-name').val(),
        manufactured: this.$('.input-manufactured').val()
      });
      this.publishEvent('!router:routeByName', 'cars');
    }
  });

  return EditCarView;
});
