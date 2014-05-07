define(["marionette",
        "text!../templates/hello.tpl",
        "text!../templates/hi.tpl"],
        function (Marionette, helloTpl, hiTpl) {

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
            HelloView = new Marionette.ItemView();

            // Define template using Template loaded by require
            // ToDo: Double Check if this assignation is allowed
            HelloView.template = _.template(helloTpl);

            // Add View to region to be render
            this.mainRegion.show(HelloView);
        },
        helloBuddy : function (buddy) {
          //alert("Hello " + buddy);
          HiView = new Marionette.ItemView();
          HiView.template = _.template(hiTpl, { buddy: buddy});
          this.mainRegion.show(HiView);
        }
    });

    return Controller;
});
