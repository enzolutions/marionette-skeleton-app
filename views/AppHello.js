define(["marionette",
        "text!../templates/hello.tpl"], function(Marionette, helloTpl ) {
    var HelloView = Marionette.ItemView.extend({
        template : _.template(helloTpl)
    });

    return HelloView;

});
