Zmail.Email = DS.Model.extend({
  addressee: DS.attr(),
  body: DS.attr(),
  subject: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
