const {MongoClient} = require("mongodb")
const userSchema = require('../models/user')
const {addKey} = require("../services/addKey")



async function addUser(eventName, userName, userEmail, userPhone, userAcces, userCpf){
    const db = new MongoClient("mongodb://0.0.0.0:27017")
    console.log("Conectado!!")
    

    let user = new userSchema(userName, await addKey(eventName), userEmail, userPhone, false, userAcces, userCpf,)
    
    await db.db("presencaQRcode10").collection(eventName).insertOne(user)
    console.log(`User ${userName} added in event ${eventName}!`)

    await db.close()
    console.log(user)
    console.log("Desconectado!!")
}

module.exports = {
    addUser
}