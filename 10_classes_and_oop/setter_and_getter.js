class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}^hsi%`
    }

    set password(value){
        this._password = value
    }
}

const ris = new User("ri@rishab.ai", "abc")
console.log(ris.email);