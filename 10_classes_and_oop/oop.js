 const user = {
    userName: "rishab",
    loginCount: 8,
    signedIn:true,

  getUserDetails : function (){
    // console.log("Got user details from database.");
    // console.log(`username:${this.userName}`);
   
  }

 }

  function User(userName,loginCount,signedIn){
     this.userName= userName
     this.loginCount=loginCount
     this.signedIn=signedIn

     this.greeting= function(){
       console.log(`Welcome ${this.userName}`);
     }

    return this
     }
  
// const userOne =new User("rishab",5,true)
const userTwo = new User("johan",8,true) 

// console.log(userOne);
console.log(userTwo.constructor);
//  console.log(user.getUserDetails());

