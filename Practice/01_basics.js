// 01 Basics variables 

const userName ="rishab"
let UserAge =25
let userEmail ="rishab@yahoo.com"
var userPhonenum =1234567890
let DOB ;


// console.table([userName,UserAge,userEmail,userPhonenum,DOB])

// 02 Basics datatypes

"use strict";

// Data types in javascript 
// 1.Number
// 2.string
// 3.big Int
// 4.boolean
// 5.null
// 6.undefined
// 7.symbol
// 8.objects

// console.log(typeof userEmail);

let UserAgeNew = String(UserAge)
// console.log(typeof UserAgeNew);
 
let userNameNew = Boolean(userName)
// console.log(userNameNew);

let num1, num2, num3

num1= num2= num3 = 2+2
// console.log(num1);

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);

// console.log(typeof 89.36 );

// String intercollsion 
const usersName  ="rishab"
const usersAge = 20

// console.log(`My name is ${usersName}, an my age is ${usersAge}.`);

// console.log(userName.__proto__);
// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.charAt(2));
// console.log(userName.indexOf("s"));

const anotherName = userName.substring(0,2) // in substring the last index value is not counted
// console.log(anotherName);

const anotherNewName = userName.slice(-5, 6) 
// console.log(anotherNewName);

const newStringOne = "        rishab  . "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url ="https://rishab.com/rishab%20Salgaonkar"

// console.log(url.replace("%20","-"));
// console.log(url.includes("rishab"));

const unName ="rishab"
// console.log(unName.split('-'));

// Practice more String

// Number and Maths
// const score = 400
// console.log(score);

// const balance = new Number (100.00)
// console.log(balance)
// console.log(typeof balance.toString().length)
// console.log(balance.toFixed(1))  it used to give the only certain amout of decimal number for the user side

let aNum = 123.8966


// console.log(aNum.toPrecision(1))

// ********Maths***************

// console.log(Math);

//  console.log(Math.abs(-5));
// console.log(Math.round(9.6));
// console.log(Math.min(9, 7,5,1,66));
console.log(Math.max(9, 7,5,1,66));


// *****************Function*************************************

function sayMyName (){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
}

sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }

// function addTwoNumber(number1,number2){
//     let result=number1+number2
//     return result
    
// }

addTwoNumber(10,8)

// function loginUsermessage(username ="Default"){
//     if(!username){
//         console.log("Please enter a username");
//     }
//     return `${username} just logged in`
// }

// console.log(loginUsermessage("rishab"));

function calculateCartPrice(val1,valu2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 900, 6523 ,1506));

const user ={
    username:"rishab",
    age:20
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and his age is ${anyobject.age}`);
}

handleobject({
    username:"rishab",
    age:20
}) 

const myNewArrays =[500, 600 ,900]

function secondArrayOnly(getarray){
     return getarray[1]
}

console.log(secondArrayOnly(myNewArrays));
console.log(secondArrayOnly([652, 896, 745, 632]))