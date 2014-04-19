Contacts.ContactsNewController = Ember.ArrayController.extend({
actions: {
	addContact: function(){
		var name = this.get('name');
		var address = this.get('address');
		var phone = this.get('phone');
		var email = this.get('email');

		var contact = this.store.createRecord('contact', {
        name: name,
        address: address,
        phone: phone,
        email: email,
        image: 'http://www.gravatar.com/avatar/' + hex_md5(email) 
           });
		contact.save();
		this.transitionToRoute('contacts');
	}
}
});