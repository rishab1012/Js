const user= {
    userName :"rishab",
    price: 999,

    welcome: function(){
        console.log(`${this.userName}, welcome to the website.`);
        console.log(this);
    }
}

// user.welcome()
// user.userName= "sam"
// user.welcome() 

// console.log(this);

//  function chai(){
    // let userName = "rishab"
//     console.log(this.username);
// }

// const chai =function(){
    // let userName = "rishab"
//     console.log(this.username);
// }

const chai = (num) => {
    let userName = "rishab"
    console.log(this.username)
} 

// chai()

// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addtwo = (num1,num2) =>  num1 + num2

// const addtwo = (num1,num2) => (num1 + num2) 

const addtwo = (num1,num2) => ({userName: "rishab"})

// console.log(addtwo());

const array = [1, 5, 6, 9, 4, 2]

// array.forEach(() => {})
