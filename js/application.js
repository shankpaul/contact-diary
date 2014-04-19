window.Contacts = Ember.Application.create();
//Contacts.ApplicationAdapter = DS.FixtureAdapter.extend();
Contacts.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});