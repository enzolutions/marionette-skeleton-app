require.config({
  baseUrl: 'vendor',
  paths : {
    backbone : 'backbone',
    underscore : 'underscore',
    jquery : 'jquery',
    marionette : 'backbone.marionette',
    wreqr : 'backbone.wreqr',
    eventbinder : 'backbone.eventbinder',
    babysitter : 'backbone.babysitter'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    wreqr: {
      deps : ['backbone']
    },
    eventbinder : {
      deps : ['backbone']
    },
    babysitter : {
      deps: ['backbone']
    },
    marionette : {
      deps: ['wreqr', 'eventbinder', 'babysitter'],
      exports : 'Marionette'
    }
  }
});

define( 'MyApp', ["marionette"], function (Marionette) {

    // set up the app instance
    var MyApp = new Marionette.Application();

    MyApp.on("initialize:after", function(){
      alert("Application has started!");
    });

    // export the app from this module
    return MyApp;
});

// Fetch and execute Marionette App
require( ["MyApp"], function (MyApp) {
    // Execute App
    MyApp.start();
});
