Contacts.ContactController = Ember.ObjectController.extend({
	actions: {
		deleteContact: function(){
			if(confirm('Continue?..'))
			{
				var contact = this.get('model');
				contact.deleteRecord();
				contact.save();
			}
		},
		editContact: function(){
			var contact = this.get('model');
			this.set('isEditing',true);
			
		}
	}
})