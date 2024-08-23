// Task 1: Create a train ticket object
const ticket = {
    from: "MRT Cubao Station",
    to: "GMA Kamining Station",      
    price: 20                
};

console.log(`Starting Station: ${ticket.from}`);
console.log(`End Station: ${ticket.to}`);
console.log(`Price: $${ticket.price}`);
console.log('________________________________________________');
// Task 2: Declare an empty object and add fields using dot notation
const person = {};
person.firstName = "Vincent Maverick"; 
person.lastName = "Clarito"; 

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log('________________________________________________');
// Arrays

// Task 3: Create an array of book objects
const books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

// Task 4: Add a new book to the array
books.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

// Display the length of the array and all book names
console.log(`Number of books: ${books.length}`);
books.forEach(book => console.log(`Book Title: ${book.title}`));

// Task 5: Use slice to copy the last two books to a new array
const lastTwoBooks = books.slice(-2);
console.log("Last two books:");
lastTwoBooks.forEach(book => console.log(`Book Title: ${book.title}`));

// Task 6
books.shift(); // Remove the first book
console.log('________________________________________________');
console.log(`Number of books after removal: ${books.length}`);
books.forEach(book => console.log(`Book Title: ${book.title}`));
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(`Total pages: ${totalPages}`);


