define(["marionette",
        "text!../templates/form.tpl"], function(Marionette, formTpl ) {
    var FormView = Marionette.ItemView.extend({
          initialize: function(options){
            // Store EventAgreegator
            this.vent = options.vent;
          },
          template: _.template(formTpl),
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
              var buddy = this.$el.find('input').val();
              // Trigger event to activate other View and Router
              this.vent.trigger("myapp:buddy", buddy);

          }
    });

    return FormView;

});
