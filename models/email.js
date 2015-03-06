Zmail.Email = DS.Model.extend({
  addressee: DS.attr(),
  body: DS.attr(),
  addresser: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
