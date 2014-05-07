define(["marionette",
        "../views/AppHi",
        "../views/AppHello"],
        function (Marionette, AppHi, AppHello) {

    var Controller = Marionette.Controller.extend({
        initialize : function(options) {
          // store a region that will be used to show the stuff rendered by this component
          this.mainRegion = options.mainRegion;
        },
        start: function() {
            //TODO: code to start
        },

        /**
         * Initialized on start, without hash
         * @method
         */
         home :  function () {
            HelloView = new AppHello();

            // Add View to region to be render
            this.mainRegion.show(HelloView);
        },
        helloBuddy : function (buddy) {
          HiView = new AppHi({
            buddy: buddy
          });

          // Render view in main Region, removing previous view
          this.mainRegion.show(HiView);
        }
    });

    return Controller;
});
