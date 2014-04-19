Contacts.ContactsEditController = Ember.ObjectController.extend({
actions: {
	updateContact: function(){
		
		var contact = this.get('content');
		contact.set('name',this.get('name'));
		contact.set('address',this.get('address'));
		contact.set('phone', this.get('phone'));
		contact.set('email', this.get('email'));
		contact.set('image', 'http://www.gravatar.com/avatar/' + hex_md5(this.get('email')));
		contact.save();
		this.transitionToRoute('contacts');

	}
}
});