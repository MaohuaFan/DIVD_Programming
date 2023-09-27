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
    }];
    
    // write your code here
    let newContact = {
      name: window.prompt("What is your name?", ""),
      phone: window.prompt("What is your phone?", ""),
      email: window.prompt("What is your email?", "")
    };
    
    contacts.push(newContact);
    let first = 0;
    let last = contacts.length - 1;
    
    console.log(`${contacts[first].name} / ${contacts[first].phone} / ${contacts[first].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);