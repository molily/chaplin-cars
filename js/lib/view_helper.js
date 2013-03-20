define([
  'handlebars',
  'chaplin/mediator',
  'lib/utils'
], function(Handlebars, mediator) {
  'use strict';

  // Application-specific Handlebars helpers
  // -------------------------------------------

  var slice = Array.prototype.slice;

  var getURL = function (routeName, params) {
    var url = false;
    // Backbone events are synchronous, so this is possible.
    mediator.publish('!router:reverse', routeName, params, function(result) {
      url = result;
    });
    // Append leading slash
    if (url !== false) {
      url = '/' + url;
    }
    return url;
  };

  // Get Chaplin-declared named routes. {{#url "like" "105"}}{{/url}}.
  Handlebars.registerHelper('url', function(routeName) {
    var params = slice.call(arguments, 1);
    params.pop(); // Remove the last options argument
    var url = getURL(routeName, params);
    if (url === false) {
      throw new Error('Handlebars url helper: Could not find route ' + routeName);
    }
    return url;
  });

  Handlebars.registerHelper('link', function(routeName) {
    var params = slice.call(arguments, 1, arguments.length - 1);
    var options = arguments[arguments.length - 1];
    var url = getURL(routeName, params);
    if (url === false) {
      throw new Error('Handlebars url helper: Could not find route ' + routeName);
    }
    url = Handlebars.Utils.escapeExpression(url);
    var html = '<a href="' + url + '">' + options.fn(this) + '</a>';
    return new Handlebars.SafeString(html);
  });
});
