define(function() {
  'use strict';

  // The routes for the application. This module returns a function.
  // `match` is the match method of the Router.
  return function(match) {

    match('', 'cars#index', { name: 'cars' });
    match('new', 'cars#new', { name: 'new_car' });
    match(':id', 'cars#show', { name: 'show_car' });
    match('edit/:id', 'cars#edit', { name: 'edit_car' });

  };
});
