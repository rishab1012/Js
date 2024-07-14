const User ={
     
    _email:"h@ris.com",
    _password:"^av",

     get email(){
        return this._email.toUpperCase()
     },

     set email(value){
        return this._email=value 
     },

     get password(){
        return `${this._password}^&*%`.toUpperCase()
     },        

     set password(value){
        return this._password=value 
     }

} 

const person1 = Object.create(User)

console.log(person1.email);