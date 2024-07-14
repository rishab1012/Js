let myName = "rishab   "

// console.log(myName.trim().length);

Object.prototype.truelenght = function(){
//    console.log(`${this}`);
   console.log(`the true lenght is ${this.trim().length}`);
}

// myName.truelenght()

let myHeros = ["thor", "sipder"]

let heroPower ={
    thor:"Hummer",
    sipder:"sling",

    getSpiderPower: function(){
        console.log(`Sipder power is ${this.sipder}`);
    }
}

Object.prototype.rishab = function(){
    console.log("Rishab is present in all object");
}

// heroPower.rishab()
// myHeros.rishab()

Array.prototype.heyrishab = function(){
    console.log(`Rishab says hi to you all`);
}

// myHeros.heyrishab()
// heroPower.heyrishab()


// inhertance

// old method 

const user = {
    username:"rishab",
    age:100,
    
}

const teaher ={
    makeVideo : true
}

const teachingSupport ={
    isAvailable : false
}

const taSupport = {
    makeAssignment:"Js assignment",
    fulltime:true,
    __proto__ : teaher,
    
}
 
user.__proto__ = taSupport


// New Method 

Object.setPrototypeOf(teachingSupport,teaher) // the teachingSupport can acces the properties of teacher 

console.log(user);

