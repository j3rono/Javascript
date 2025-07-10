// Javascript data types can be categorized into two main groups: primitive and non-primitive(or reference) data types.
// Primitive/simple data types include: number, string, boolean, null, undefined, and symbol.
// Non-primitive/reference data types include: object, function, and array.

//Data Types in Javascript are the different kinds of values trhat can be stored and maniulated within the language.    
//Understanding data types is essential for writing effective and efficient code in Javascript.

let email8786757 = "KXN4F@example.com"; //string -- names, passwords, location, country etc
let age = 25; //number -- age, height, weight, temperature etc include decimals
let isActive = true; //boolean -- true or false values such as isLoggedIn, isPaid, isActive etc
let isKenyan = false; //boolean -- true or false values such as isLoggedIn, isPaid, isActive etc
let isLoading = true;

//null - NULL is a special value in Javascript that represents the absence of a value.
let user = null; // user is intentionally set to have no value

let userName; //undefined - userName is declared but not assigned a value yet - empty cup
//undefined - undefined is a special value in Javascript that represents the absence of a value.
//symbol - symbol is a special data type in Javascript that represents a unique identifier for a value.

//Array - a list of items, which can be of any data type. Arrays are used tom store multiple values in a single 
// variable. They are ordered collections of values and can contain elements of different data types, including
// //other arrays or objects

let fruits = ["apple", "banana", "orange", "grape", "kiwi", "pineapple", "watermelon", "mango", "strawberry", "blueberry"

]; // Array of strings
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of numbers
let mixed = ["apple", 2, "banana", 4, "orange", 6, "grape", 8, "kiwi", 10]; // Array of both strings and numbers    
let coordinate = [
    [1, 2],
    [3, 4],
    [5, 6],
]; // Array of arrays (2D array) 

let marks = [80, 90, 70, 60, 50, 40, 30, 20, 10, 0];// array representing marks

//Object - a collection of key-value pairs, where each key is a string and the value can be of any data type.
// Objects are used to store and manipulate complex data structures and can contain properties and methods.
let userProfile = {
    name: "june",
    age: 18,
    isActive: true,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
        state: "NY",
        zip: "10001",
    },



hobbies: ["reading", "writing", "coding", "gaming", "sleeping"],
}; //object with properties and nested objects/arrays 


// function - a block of code that performs a specific task or set of tasks. Functions are used to encapsulate
// reusable logic and can be called multiple times to perform the same task.
function greet(name) {
    return `Hello, ${name}!`;
    
} //Function that takes a name as a parameter and returns a greeting message
greet("june"); // calling the function with "june" as an argument





