class user{

    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }

}

const Me = new user("rishab")
// console.log(Me.createId())

class teacher extends user{
      constructor(username, email){

        super(username)
        this.email=email
      }

}


const iphone = new teacher("iphone","iphone@gmail.com")
// console.log(iphone.createId())

i

