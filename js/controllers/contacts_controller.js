Contacts.ContactsController = Ember.ArrayController.extend({
	
	actions: {
		query: function(){
			var query = this.get('search');
			console.log(query);
			// var d = this.filterBy('name','sadas');	
			// console.log(d);
		}
	}

});