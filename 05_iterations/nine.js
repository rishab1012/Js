const myNum = [1 ,2 , 3]

const myTotal = myNum.reduce( (acc, curval ) => {
    //  console.log(`acc: ${acc} and curval: ${curval}`);
      return acc + curval
} ,0)

// const newtotal = myNum.reduce( (acc, curval) => (acc+curval) ,0) Short way to do the pervious function

// console.log(myTotal);
// console.log(newtotal);

const shoppingCart = [
    {
        course : "js course",
        price: 2999
    },
    {
        course : "py course",
        price: 999
    },{
        course : "android course",
        price: 5999
    },{
        course : "Data science course",
        price: 12999
    },
]

const totalCartPrice = shoppingCart.reduce( (acc, curval) => acc + curval.price ,0 )


console.log(totalCartPrice);