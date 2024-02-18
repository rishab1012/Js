const name = "rishab"
const repoCount =2

// console.log(name + repoCount + "value"); this way of  using string is old method 

// this method is called string intercollsion
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String("rishab-Sal")

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

// both slice and subtring does'nt include the last value
// eg. myname="johann" slice (0,4) , only till a it will be printed 
//  let myname = "johan"
// let myothername = myname.slice(0,4)
// console.log(myothername);

const anotherString =  gameName.slice(-8,4)
// console.log(anotherString); It will start to count from negative value can expect value of sh 

 const newStringOne =  "   Rishab   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rishab.com/rishab%20Salgaonkar"

console.log(url.replace("%20","-"))

console.log(url.includes("rishab"));

console.log(gameName.split("-"))