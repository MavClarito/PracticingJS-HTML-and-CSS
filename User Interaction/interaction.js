let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// Prompt the user to enter details for the new contact
let name = prompt("Enter the name:");
let phone = prompt("Enter the phone number:");
let email = prompt("Enter the email address:");

// Add the new contact to the end of the list
contacts.push({
    name: name,
    phone: phone,
    email: email
});

// Display the first and last contact from the list
let first = contacts[0];
let last = contacts[contacts.length - 1];

console.log(`${first.name} / ${first.phone} / ${first.email}`);
console.log(`${last.name} / ${last.phone} / ${last.email}`);
