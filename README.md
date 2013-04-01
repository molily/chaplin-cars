# Chaplin.js CRUD example: Car Manager

This is an example JavaScript application using <a href="https://github.com/chaplinjs/chaplin">Chaplin.js</a> and <a href="http://backbonejs.org/">Backbone.js</a>. It’s based on the <a href="https://github.com/chaplinjs/chaplin-boilerplate-plain">Chaplin Boilerplate in plain JavaScript</a>.

The example allows create, read, update, delete (CRUD) operations on a shared Backbone Collection. Typically, Chaplin disposes controllers and their models/views when a different controller or controller action takes over. This example uses the <a href="https://github.com/chaplinjs/chaplin/blob/master/docs/chaplin.composer.md">Chaplin Composer</a> to share the collection between the controller actions in a controlled way.

The collection is persisted using <a href="https://developer.mozilla.org/en-US/docs/DOM/Storage">HTML5 localStorage</a>.

To run the example on your developer machine, start a local webserver whose document root points to the directory with the example files. Then open `http://localhost:1234/` in your browser (the port may vary of course).