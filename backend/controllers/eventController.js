
const {MongoClient} = require("mongodb")
const eventTicketSchema = require("../models/eventTicket")
const eventPassSchema = require("../models/eventPass")
const {keyGenerator} = require("../services/keyGenerator")
const {createReadAcces} = require("../services/createReadAcces")

async function addEventTicket(modelName){
    const db =  new MongoClient(`mongodb://0.0.0.0:27017`)
    console.log("Conectado!!")

    const eventTicket = new eventTicketSchema(false, "ticket", keyGenerator(32))

    await db.db("presencaQRcode10").collection(modelName).insertOne(eventTicket)

    await createReadAcces(modelName,modelName)
    console.log("Event Ticket create!")
    await db.close()
    console.log("Desconectado!!")
}



async function addEventPass(modelName){
    const db =  new MongoClient(`mongodb://0.0.0.0:27017`)
    console.log("Conectado!!")

    const eventPass = new eventPassSchema(false, "pass", keyGenerator(32) )

    await db.db("presencaQRcode10").collection(modelName).insertOne(eventPass)
    
    console.log("Event Ticket create!")
    await db.close()
    console.log("Desconectado!!")
}


module.exports = {
    addEventTicket,
    addEventPass
}

