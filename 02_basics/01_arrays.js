// arrays

const myArr = [0, 1, 2, 3, 4, 5]

const myheors =["rishab", "Johaan", "rohaan", "Batman"]

let myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr2);
myArr.push(7)
myArr.pop()
myArr.push(6,7,8)
myArr.pop(7,8)
myArr.pop(6)

myArr.unshift(10) //it use to enter a elment in the start of the array

myArr.shift()// It is used to remove the element from the starting of the array 

// console.log(myArr.includes(4));  it use to check if the element exist in the array
// console.log(myArr.indexOf(10)) it use to check what is the index value of the element

// const newArr = myArr.join()converts the array in string

// console.log( myArr);
// console.log( newArr);

// slice , splice

// console.log('A' , myArr);

const  myn1 = myArr.slice(1, 3) // In slice the element will be printed from the mention rang excluding the last element and the array will not be changed 
// console.log(myn1);
// console.log('B' , myArr);

const myn2 = myArr.splice(1, 3) //in Splice the the element rang mention will be removed from the array and will be displayed 
// console.log(myn2);
// console.log('C' , myArr);
 