// if
// const temperature = 41

// if( temperature < 40){
//     console.log("temperature less than 40");
// } else{
//     console.log("temperature more than 40");
// }

// <, > ,<=, =>, ==, !=, ===, !==

// const score =200
 
// if(score > 100){
//     const power= "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

const balance = 1000

// if(balance >= 1000) console.log("balance less than 1000"),
// console.log("balance more than 1000");  It a very immature way of writing code 

// if(balance < 500){
//     console.log("balance less than 500");
// } else if (balance < 700){
//     console.log("balance less than 700");
// } else  if (balance < 900){
//     console.log("balance less than 900");
// } else {
//     console.log("balance less than 1200");
// }

const userLoggedIn = true
const debitCard= true
const loggedFromGoggle =true
const logeedFromEmail = false

if( userLoggedIn && debitCard){
    console.log("Allowed to buy");
}

if(logeedFromEmail || loggedFromGoggle){
    console.log("User logged in");
}

