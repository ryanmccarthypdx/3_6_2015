Zmail.Router.map(function() {
  this.resource('home', {path: '/'}, function() {
    this.resource('compose');
  });
  this.resource('new-folder');
  this.resource('email', {path: '/email/:email_id'});
})
