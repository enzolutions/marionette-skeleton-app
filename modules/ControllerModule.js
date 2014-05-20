define(["marionette",
        "../views/HiView",
        "../views/HelloView"],
        function (Marionette, HiView, HelloView) {

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
            helloView = new HelloView();

            // Add View to region to be render
            this.mainRegion.show(helloView);
        },
        helloBuddy : function (buddy) {
          hiView = new HiView({
            buddy: buddy
          });

          // Render view in main Region, removing previous view
          this.mainRegion.show(hiView);
        }
    });

    return Controller;
});
