define(["marionette",
        "text!../templates/footer.tpl"], function(Marionette, footerTpl ) {

    var FooterView = Marionette.ItemView.extend({
            template: _.template(footerTpl)
    });

    return FooterView;

});
