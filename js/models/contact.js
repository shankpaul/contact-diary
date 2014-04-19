Contacts.Contact = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  image: DS.attr('string')
  
});

Contacts.Contact.FIXTURES = [
 {
   id: 1,
   name: 'Jhon Tomins ',
   address: 'Street 1, Kochi ',
   phone: '343258741 ',
   email: 'john@gmail.com',
   image: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
 },
 {
   id: 2,
   name: 'Shan ',
   address: 'Street 1, Kochi ',
   phone: '89258741 ',
   email: 'shanpaul06@gmail.com',
   image: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
 },
 {
   id: 3,
   name: 'paul',
   address: 'Street 1, Kochi ',
   phone: '963258741 ',
   email: 'paul@gmail.com',
   image: "http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200"
 }
];