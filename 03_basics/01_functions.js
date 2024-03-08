
function sayMyName(){
console.log('R');
console.log('I');
console.log('S');
console.log('H');
console.log('A');
console.log('B');
}

// sayMyName() excuction of the function 

// function addTwoNum(number1, number2){
//   console.log(number1+number2);
// }

// function addTwoNum(number1, number2){
//     let result=number1+number2
//     return result
//   }

function addTwoNum(number1, number2){
    let result=number1+number2
    return result
    return number1 +number2
  }
  
const result= addTwoNum(7,9)

// console.log("Result :", result);

function loginUserMessage(username = "Sam"){
    if(!username){
console.log("Please enter username");
return 
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("rishab"));
