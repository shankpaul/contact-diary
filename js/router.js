Contacts.Router.map(function() {
  this.resource('contacts', { path: '/' },function(){
  	this.route('new');
  	this.route('edit',{path: '/:id'});
  
  });

});

Contacts.ContactsRoute = Ember.Route.extend({
	
  model: function() {
  	console.log('index');
    return this.store.find('contact');
  }
});

Contacts.ContactsNewRoute = Ember.Route.extend({
	
   model: function() {
   	console.log('new');
    return this.store.find('contact');
  },
  renderTemplate: function(controller) {
    this.render('contacts/new', {controller: controller});
  }
});

Contacts.ContactsEditRoute = Ember.Route.extend({
	
  model: function(params) {
    return this.store.find('contact', params.id);
  },
  renderTemplate: function(controller) {
    this.render('contacts/edit', {controller: controller});
  }
});