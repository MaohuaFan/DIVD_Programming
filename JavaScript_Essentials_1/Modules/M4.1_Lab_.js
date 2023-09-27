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

while (true) {
    let options = prompt("Enter an option: first, last, all, new, or quit");

    if (options === null) {
        alert("User canceled the program.");
        break; // Exit the loop if the user cancels
    }

    switch (options.toLowerCase()) {
        case "first":
            alert(`First contact:\n${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            break;
        case "last":
            let lastIndex = contacts.length - 1;
            alert(`Last contact:\n${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`);
            break;
        case "all":
            let allContactsInfo = "All contacts:\n";
            for (let i = 0; i < contacts.length; i++) {
                allContactsInfo += `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}\n`;
            }
            alert(allContactsInfo);
            break;
        case "new":
            let newContact = {
                name: prompt("Enter your name", ""),
                phone: prompt("Enter your phone", ""),
                email: prompt("Enter your email", ""),
            };
            if (newContact.name && newContact.phone && newContact.email) {
                contacts.push(newContact);
                alert("Contact added successfully.");
            } else {
                alert("Error: Please enter valid contact information.");
            }
            break;
        case "quit":
            alert("Exiting the program.");
            return; // Exit the loop and the program
        default:
            alert("Invalid option. Please try again.");
    }
}
