require.config({
  baseUrl: 'libs',
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

// Loading dependences and module to execute Marionette App
require( ["marionette","../modules/AppRouter", "../modules/AppController"], function (Marionette, AppRouter, AppController) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    // initialize the app controller
    var controller = new AppController({});

    // initialize the app router
    MyApp.addInitializer(function(options) {
        // initialize the router
        var router = new AppRouter({
          controller : controller
        });
    });

    MyApp.on("initialize:after", function(){
      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();
    });

    MyApp.start({
        root : window.location.pathname,
        path_root : "/"
    });
});
