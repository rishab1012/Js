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

// console.log(typeof myFunction);


// type of value      Result 
// undefined             "Undefined"
// Null                  "Object"
// Boolean               "boolean"
// Number                "number"
// String                "string"
// Object                "object"
// Function              "function"

// *************************

// stack (Primitive), Heap(Non-Primitive)

// In stack we take a copy of the data,we get the direct refernece in heap

let myYoutubeName = "Rishab"

let anotherName = myYoutubeName

// console.log(anotherName);

anotherName = "Johaan"

// console.log(myYoutubeName);
// console.log(anotherName);

let user1 ={
    name :"Rohaan",
    userGmail : "rohaan@gmail.com"

}

let user2 = user1

user2.userGmail = "newrohaan@gmail.com"

console.log(user1);
console.log(user2);