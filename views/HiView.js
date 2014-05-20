define(["marionette",
        "text!../templates/hi.tpl"], function(Marionette, hiTpl ) {
    var HiView = Marionette.ItemView.extend({
      initialize: function(options){
        // Assign dinamic variable to render in template
        this.buddy = options.buddy;
      },
      // Set the template with onBefore to avoid a timing issue with initilize.
      onBeforeRender: function(){
        this.template = _.template(hiTpl, { buddy: this.buddy});
      },
    });

    return HiView;

});
