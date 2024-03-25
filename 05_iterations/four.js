const myObject ={
    js: "javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"Swift by Apple"
}
for (const key in myObject) {
//    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

const programming =["java", "cpp", "python", "ruby"]

for (const key in programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set("In","India")
map.set("Us","United States")
map.set("Uk","United Kingdom")

// for (const key in map) {
//     console.log(key);
// }