// const tinderUser = new object()
const tinderUser = {}

tinderUser.id ="123"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "rishab@gmail.com",
    fullName:{
          userFullName:{
            firstname:"rishab",
            lastname: "salgaonkar"
          }
    }

}

// console.log(regularUser.fullName.userFullName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}


// const obj3 = {obj1, obj2}

const obj3 =Object.assign(obj1, obj2)
const obj4 =Object.assign({},obj1, obj2) //ot is better way to print the output.
// console.log(obj3);
// console.log(obj4);

const obj5 ={...obj1, ...obj2}
// console.log(obj5); easy to merge two objects instead of using assign function 

  const user =[  // we get value from database this way
    {
        email:"rishab@gmail.com",
        id:56
    },
    {
        email:"johaan@gmail.com",
        id:57
    }
  ] 

//   console.log(user[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} =course //de-structure objects

console.log(instructor);

// {   JSON format 
//    "name": "rishab",       
//    "coursename": "Js in hindi",
//    "coursefee": "free"
// }

// [    API can be array format also
//     {},
//     {},
//     {}
// ]
