// Primitive

// 7 Types : String, Number, Boolen, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol (123)

// console.log(typeof Id);

//Having n in the end of the numerical value it converts it from number to bigInt
const bigNumber = 78945656168644654n

// console.log(typeof bigNumber)
// Referneces types (No Primitive)

// Array, Objects, Functions 

const hero = ["shaktiman", "naagraj", "doga"]

let myObj = {

    name :"rishab",
    age :20,
}

// console.log(typeof outsideTemp);

// using function as a variable

const myFunction = function(){
    console.log("hello World!");
}

console.log(typeof myFunction);


// type of value      Result 
// undefined             "Undefined"
// Null                  "Object"
// Boolean               "boolean"
// Number                "number"
// String                "string"
// Object                "object"
// Function              "function"
