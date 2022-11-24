

class userSchema 
    {
        constructor(name, key, email, phone, present = false, acces = [], cpf){
        this.name = name
        this.cpf = cpf
        this.key = key
        this.email = email
        this.phone = phone
        this.present = present
        this.acces = acces
        }

    }



module.exports = userSchema;