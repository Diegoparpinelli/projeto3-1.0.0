const mongoose = require("mongoose");


class eventPassSchema {
    constructor(enable, type, ps, acces= []){
            config: {
                this.enable = enable 
                this.type = type
                this.ps = ps
                this.acces = acces
            }
            
        }
     
    }
    


module.exports = eventPassSchema;