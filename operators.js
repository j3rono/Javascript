// operators in javascript

//operators in Javascrript are special symbols or keywords that perform operators on
//variables and values to produce new values.they can be categorized into several types based on their
//functionality and the number of operands they require.

// 1. Arithmetic operators: used for mathematical calculations
console.log(5 % 3 ); //modulus operator, returns the remainder of a division operation
let daynumber = 34

if (daynumber % 4 ==0) {
    console.log("Alert! send your cut");
}
// 2. Assignment operators: used to assign values to variables. esxample: = , +=, -=, *=, /=

daynumber += 10 //add 10 to daynumber ---- daynumber = daynumber =10

// 3. Comparison operators: used to compare values and return a boolean result. EXamples: ==, !=, >, <, >=, <=
console.log(5 == "5" ) // loose equality, checks only value
console.log(5 === "5" ) // strict equality, checks value and type
console.log(32 > 20); //true


let age = 19;
if (age > 21)
    console.log("Allowed into the website")

let age = 21;

if (age >= 21) {
    console.log("Allowed into the website");
    console.log("Allowed into the website");
    
}

// 4. Logical operators: used to perform logical oprations on boolen values. Examples: &&,(and) ||(or), !(not)
if(age >= 21 && location=="kenya") {
    console.log("Allowed into the website");
}
