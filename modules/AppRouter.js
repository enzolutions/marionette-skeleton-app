define(["marionette"], function (Marionette) {
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "": "home",
      "hello/:username": "helloBuddy"
    },
    /* standard routes can be mixed with appRoutes/Controllers above */
    /*routes : {
      "hello/:username": "helloBuddy"
    },
    helloBuddy : function (buddy) {
      // Without controller the routing functions live in Router object
      // AppRouter doesn't have a initialize method
      // We can't pass regions like in controller
      alert("Hello " + buddy);
    }*/
  });

  return Router;
});
