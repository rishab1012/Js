// var c = 300

let a=300
if (true){
let a= 10
const b= 20
var c= 30
// console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
     const userName ="rishab"

    function two(){
    const WebsiteName ="youtube"
    console.log(userName);
    }
    // console.log(WebsiteName);

    two()
}

// one()

if(true){
    const userName ="Rishab"
    if(userName === "Rishab"){
        const WebsiteName = "Instagram "
        // console.log(WebsiteName + userName)
    }

    // console.log(WebsiteName);
}

// console.log(userName);

// ***************************Interesting*****************

console.log(addone(5))

function addone(num){
    return num +1
}

addtwo(5) // Hoisting problem calling the variable before decalaration 

const addtwo = function (num){
    return num +2 
}

