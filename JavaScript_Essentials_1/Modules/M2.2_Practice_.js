"use strict";

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}, {
name: "Maisie Haley",
phone: "0913 531 3030",
email: "risus.Quisque@urna.ca"
}];

contacts.forEach(myFunction);
 
function myFunction(item, index) {
  console.log((index+1) + ". " + contacts[index].name + " / " + contacts[index].phone + " / " + contacts[index].email);
}