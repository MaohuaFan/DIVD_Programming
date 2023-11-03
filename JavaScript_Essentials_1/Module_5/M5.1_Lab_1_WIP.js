let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk",
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com",
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu",
    },
];

function showContact(contactList, index) {
    if (contactList instanceof Array && index >= 0 && index < contactList.length) {
        let contactInfo = `Contact:\n${contactList[index].name} / ${contactList[index].phone} / ${contactList[index].email}`;
        alert(contactInfo);
    } else {
        alert("Invalid contact or index.");
    }
}

function showAllContacts(contactList) {
    if (contactList instanceof Array) {
        let allContactsInfo = "All contacts:\n";
        for (let i = 0; i < contactList.length; i++) {
            allContactsInfo += `${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}\n`;
        }
        return allContactsInfo;
    } else {
        alert("Invalid contact list.");
    }
}

function addNewContact(contactList, name, phone, email) {
    if (
        contactList instanceof Array &&
        name !== undefined &&
        phone !== undefined &&
        email !== undefined
    ) {
        let newContact = {
            name: name,
            phone: phone,
            email: email,
        };
        contactList.push(newContact);
        alert("Contact added successfully.");
    } else {
        alert("Error: Please enter valid contact information.");
    }
}

while (true) {
    let options = prompt("Enter an option: contact, all, new, or quit");

    if (options === null) {
        alert("User canceled the program.");
        break; // Exit the loop if the user cancels
    }
    switch (options.toLowerCase()) {
        case "contact":
            let contactIndex = Number(prompt("Enter Contact Index")) - 1;
            showContact(contacts, contactIndex);
            break;
        case "all":
            let allContacts = showAllContacts(contacts);
            if (allContacts) {
                alert(allContacts);
            }
            break;
        case "new":
            let newName = prompt("Enter your name", "");
            let newPhone = prompt("Enter your phone", "");
            let newEmail = prompt("Enter your email", "");
            addNewContact(contacts, newName, newPhone, newEmail);
            break;
        case "quit":
            alert("Exiting the program.");
            return; // Exit the loop and the program
        default:
            alert("Invalid option. Please try again.");
    }
}
