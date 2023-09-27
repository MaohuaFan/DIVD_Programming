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

let options = prompt("Enter First, Last, or Add");
let result = ""; // Initialize as an empty string

let first = 0;
let last = contacts.length - 1;

if (options !== null) {
    switch (options.toLowerCase()) {
        case "first":
            result = `${contacts[first].name} / ${contacts[first].phone} / ${contacts[first].email}`;
            console.log(`${contacts[first].name} / ${contacts[first].phone} / ${contacts[first].email}`);
            break;
        case "last":
            result = `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`;
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            break;
        case "add":
            let newContact = {
                name: window.prompt("Enter your name", ""),
                phone: window.prompt("Enter your phone", ""),
                email: window.prompt("Enter your email", ""),
            };
            if (newContact.name && newContact.phone && newContact.email) {
                contacts.push(newContact);
                result = "Contact added successfully.";
                last = contacts.length - 1; // Update the last index
                console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            } else {
                result = "Error: Please enter valid contact information.";
            }
            break;
        default:
            result = "Invalid option";
    }
} else {
    result = "User canceled the prompt";
}
alert(result);
