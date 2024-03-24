// for of 

// ["", "", ""] 
// [{}, {}, {}]

const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greeting ="Hello World!"
for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps 

const map = new Map()
map.set("IN", "India")
map.set("UK", "United Kingdom")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,":-",value);
}

const myObject ={
    game1: "NFS",
    game2:"GTA5"
}

// for (const [key, value] of object) { object cant be iterated using for of loop
//     console.log(key,':-',value);
// }
