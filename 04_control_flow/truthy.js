const userEmail = ""

if(userEmail){
    console.log("user have Email_id");
}else {
    console.log("user dont have Email_id");
}

// falsy values 

// falsy, 0, -0, Bigint 0n, "", null, NaN, undefined

// truthy values 
// "0", "false", " ",[],{}, function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}

if(Object.keys(emptyObj).length ===0){
  console.log("object is empty");
}

// Nullish Coalescing Operator (??):null undefined 

let val1
// val1= 50 ?? 60 
// val1 = null ?? 10 
// val1= undefined ?? 60 
// val1 = undefined ?? 59 ?? 98 

console.log(val1);

// terniary operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(" iceTeaPrice is less than 80") : console.log(" iceTeaPrice is more than 80") 
