class User{

    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    
}

class teacher extends User{

  constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password
  }


  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const Client1 = new teacher("rishab","rishab@gmail.com","123456")

Client1.addCourse()


