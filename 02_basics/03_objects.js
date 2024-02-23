// singleton using constructor and is one of the kind
// Object.create

const mySym = Symbol("key1")

// object literals 
const jsUser ={
    name :"Rishab", //name is key and Rishab is value
    "full_name": "Rishab Salgaonkar",
    [mySym]: "key1",
    age:20,
    location: "jaipur",
    email: "rishab@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]

}

jsUser.age =22

// two ways to acces the objects
// console.log(jsUser.name)
// console.log(jsUser["age"]);
// console.log(jsUser["full_name"]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)
jsUser.age = 25
// console.log(jsUser);


jsUser.birthday = function(){
    console.log("Hello js User");
}

jsUser.birthdaytwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.birthday());
console.log(jsUser.birthdaytwo());