Zmail.Email = DS.Model.extend({
  addressee: DS.attr(),
  content: DS.attr(),
  addresser: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
