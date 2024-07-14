class User {

    constructor(username,email,password)
    {this.username=username
    this.email= email
    this.password= password}

    encrtpy(){
        return `${this.password}abc`
    }

    changetheUsernameCase(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("rishab","rishab@gmail.com","1234")

console.log(userOne.encrtpy())
console.log(userOne.changetheUsernameCase());

function User(username,email,password){
    this.username=username
    this.email= email
    this.password= password

}

User.prototype.encrtpy = function(){
  return `${this.password}abc`
}


User.prototype.encrtpy= function(){
    return `${this.password}abs`
}

User.prototype.changetheUsernameCase= function(){
    return `${this.username.toUpperCase()}`
}

const jon = new User("Johaan","johan","home12")

console.log(jon.changetheUsernameCase())