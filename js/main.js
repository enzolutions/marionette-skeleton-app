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
require( ["marionette",
          "../modules/AppRouter",
          "../modules/AppController",
          "text!../templates/header.tpl",
          "text!../templates/form.tpl"],
          function (Marionette, AppRouter, AppController, headerTpl, formTpl) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    // Define regions
    MyApp.addRegions({
      headerRegion: "#header-region",
      toolbarRegion: "#toolbar-region",
      mainRegion: "#main-region",
      footerRegion: '#footer-region'
    });

    // initialize the app controller
    // Pass reference to Main Region to Controller
    var controller = new AppController({
      mainRegion: MyApp.mainRegion
    });

    // initialize the router
    MyApp.router = new AppRouter({
      controller : controller
    });

    // Initialize the app router if neccessary
    MyApp.addInitializer(function(options) {});

    MyApp.on("initialize:after", function(){

      // Createing a generic ItemView for Header
      headerView = new Marionette.ItemView();

      // Define template using Template loaded by require
      // ToDo: Double Check if this assignation is allowed
      headerView.template = _.template(headerTpl);

      // Extend ItemView to define custom events
      formView  =  Marionette.ItemView.extend({
        events: {
            'click button': 'process_form',
            'keypress input[type=text]': 'keyEnter'
        },
        keyEnter : function(e) {
            if (e.keyCode != 13) {
                return;
            }
            this.process_form(e);
        },
        process_form : function (e) {
            e.preventDefault();
            var value = this.$el.find('input').val();
            MyApp.router.navigate('#hello/' + value, {trigger: true});
        }
      });

      form = new formView();
      form.template = _.template(formTpl);

      // Add Header View to region to be render
      MyApp.headerRegion.show(headerView);

      // Add Form to render to main region and avoid be replaced
      MyApp.toolbarRegion.show(form);

      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();
    });

    MyApp.start({});
});
