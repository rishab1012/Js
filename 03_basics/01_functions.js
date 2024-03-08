
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

// console.log(loginUserMessage("rishab"));


function calculateCartPrice(val1, valu2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,800,2000,560));

const user ={
    username:"rishab",
    prize:599
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and prize is ${anyobject.prize}`);
}

// handleobject(user)

handleobject({
    username:"Sam",
    prize:5999
})

const myNewArray =[200, 800, 900]
 
function resturnSecondValue(getarray){
    return getarray[1]
}

// console.log(resturnSecondValue(myNewArray));
console.log(resturnSecondValue([100, 500, 700, 900]));