function User(email,password){
      this._email =email
      this._password=password

      Object.defineProperty(this,"email",{
          get: function(){
         return  this._email.toUpperCase()
          },
          set:function(value){
            return  this.email = value
          }

      })

      Object.defineProperty(this,"password",{
        get: function(){
            return  `${this._password}^&*`.toUpperCase()
             },
             set:function(value){
               return ` ${this._password = value}`
             }
      })

}

const Oneuser = new User("risrishab@rishab.com","rishab")

console.log(Oneuser.password)