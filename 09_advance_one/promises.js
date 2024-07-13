// creation for promise in two ways

const promiseOne = new Promise(function(resolve,rejected){
     setTimeout(function(){
        console.log("Asyn connected to network");
        resolve()
     },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// other way to creat a promise 
new Promise( (resolve,reject) =>{
    setTimeout(function(){
        console.log("Asyn connected to server.");
        resolve()
    },1000)

}).then(function(){
    console.log("promise resolved");
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve({username:"rishab", email:"rishab@gmail.com"})
    },1000)
})

promiseThree.then(function(userData){
        console.log(`the user Name:${userData.username} and the user Email:${userData.email}`);
})

const promiseFour = new Promise( (resolved, rejected ) =>{

        setTimeout(function(){
            let error = false
            if(!error){
                resolved({username:"Johaan",password:"home1012"})
            }else{
                rejected("Error: Something went wrong!")
            }
        },1000)
})

promiseFour
.then( (userData) => {
    console.log(userData)
    return userData.username
}).then(function(username){
     console.log(`the username is:${username}`);
}).catch((error)=>{
    console.log(error);
}).finally( ()=> {
    console.log("Either the request(promise) is resolved or rejected.");
})

const promiseFive = new Promise((reloved, reject) => {
        setTimeout(function(){
            let error = false
            if(!error){
                reloved({username:"javascript", password:"home123"})
            }else{
                reject('Error : Js went wrong ')
            }
        },1000)
})

async function consumePromiseFive(){
    
     try {
        const response = await promiseFive
        console.log(response.username);
     } catch (error) {
        console.log(error);
     }

}

consumePromiseFive()


// async function getAllUsers(){
   
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//       console.log("Error:",error);
//    }
// }

// getAllUsers()

fetch("https://api.github.com/users/rishab1012")
.then((response)=>{
   return response.json()
}).then((thenable) =>{
   console.log(thenable);
})
.catch((error)=>{
    console.log("Error:",error);
})