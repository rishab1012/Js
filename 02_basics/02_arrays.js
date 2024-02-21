const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

let all_new_heros = [... marvel_heros, ...dc_heros]//... It guess it spreads out the array 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6 ,7,[4, 5]]]

const real_another_array =  another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("rishab"))
// console.log(Array.from("rishab")); convert to array 
// console.log(Array.from({name :"rishab"}));  //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let newArray = new Array(score1)
console.log(typeof newArray);

// learn more about isArray, of and from 