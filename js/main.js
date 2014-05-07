require.config({
  baseUrl: 'vendor',
  paths : {
    backbone : 'backbone',
    underscore : 'underscore',
    jquery : 'jquery',
    text: 'text',
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
      deps : ['backbone'],
      exports: 'Backbone.Wreqr'
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
require( ["marionette",
          "../modules/AppRouter",
          "../modules/AppController",
          "../modules/AppEventAggregator",
          "../views/AppHeader",
          "../views/AppForm",],
          function (Marionette, AppRouter, AppController, AppEventAggregator, HeaderView, FormView) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    // Define regions
    MyApp.addRegions({
      headerRegion: "#header-region",
      toolbarRegion: "#toolbar-region",
      mainRegion: "#main-region",
      footerRegion: '#footer-region'
    });

    // Initialize the app controller
    // Pass reference to Main Region to Controller
    var controller = new AppController({
      mainRegion: MyApp.mainRegion,
    });

    // initialize the router
    MyApp.router = new AppRouter({
      controller : controller
    });

    // Initialize the app router if neccessary
    MyApp.addInitializer(function(options) {});

    MyApp.on("initialize:after", function(){

      // Createing a generic ItemView for Header
      headerView = new HeaderView({router: MyApp.router});

      // Add Header View to region to be render
      MyApp.headerRegion.show(headerView);

      // Initialiaze EventAggregator a Messaging System
      MyApp.vent = new AppEventAggregator();

      // Create  Form view
      formView = new FormView({
        vent: MyApp.vent,
      });

      // Add Form to render to main region and avoid be replaced
      MyApp.toolbarRegion.show(formView);

      MyApp.vent.on("myapp:buddy", function(buddy){
        MyApp.router.navigate('#hello/' + buddy, {trigger: true});
      });

      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();
    });

    MyApp.start({});
});
