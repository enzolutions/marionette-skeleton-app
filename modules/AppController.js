define(["marionette"], function (Marionette) {

    var Controller = Marionette.Controller.extend({
        initialize : function(options) {
             //TODO: code to initialize
         },
        start: function() {
            //TODO: code to start
        },

        /**
         * Initialized on start, without hash
         * @method
         */
         home :  function () {
            alert('Hello Marionette');
        },
    });

    return Controller;
});
