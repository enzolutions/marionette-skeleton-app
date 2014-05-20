define(["marionette",
        "text!../templates/header.tpl"], function(Marionette, headerTpl ) {

    var HeaderView = Marionette.ItemView.extend({
            template: _.template(headerTpl)
    });

    return HeaderView;

});
