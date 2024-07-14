// console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
 
// console.log(descriptor);

Object.create(null)


const chai = {

    name:"rishab",
    prof :"SD3",

    getHired: function(){
        console.log(`code phat gaya!!!!!`);
    }

}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    enumerable: false
})

for (const [key, val] of Object.entries(chai)) {
    if(typeof val !== 'function'){
        console.log(`${key} : ${val}`);
    }
    
}
