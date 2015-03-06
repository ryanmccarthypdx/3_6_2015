Zmail.ComposeController = Ember.ArrayController.extend({
  actions: {
    sendEmail: function() {
      var newEmail = this.store.createRecord('email', {
        addressee: this.get('addressee'),
        body: this.get('body')
      });
      newEmail.save();
      this.set('addressee', null);
      this.set('body', null);
      this.transitionToRoute('home');
    }
  }

});
