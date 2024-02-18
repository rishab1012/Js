const score = 400
// console.log(score)

const balance = new Number (100.00)
// console.log(balance)

// console.log(balance.toString().length)
//  console.log(balance.toFixed(0)) it used to give the only certain amout of decimal number for the user side

let aNum = 123.8966

// console.log(aNum.toPrecision(4)) it used to give a precised value till where the dot is 

let num =10000000

// console.log(num.toLocaleString()); //american number respresenation 
// console.log(num.toLocaleString('en-In')); //Indian number respsentation

// *****************Math**********************

// console.log(Math);

// console.log(Math.abs(-5));
// console.log(Math.round(9.6));
// console.log(Math.min(9, 7,5,1,66));
// console.log(Math.max(9, 7,5,1,66));


// console.log(Math.random())
// console.log(Math.random()*10 +1)
// console.log(Math.floor(Math.random()*10) +1);

min =1
max =10

console.log(Math.floor(Math.random()*(max - min +1))+ min);