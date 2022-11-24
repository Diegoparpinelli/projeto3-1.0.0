const {MongoClient} = require("mongodb")
const eventTicketSchema = require("../models/eventTicket")
const eventPassSchema = require("../models/eventPass")

async function showCollections(nameDB = "presencaQRcode10"){

    let list = []

    const db = new MongoClient(`mongodb://0.0.0.0:27017`)

    const presenca = db.db("presencaQRcode10")
    const collections = await presenca.collections()
    const nameCollections = []
    collections.map(elem=> nameCollections.push(elem.collectionName))
    for(let i = 0; i < nameCollections.length; i++){
        const busca = await presenca.collection(nameCollections[i]).findOne({},{enable:1})
        list.push({name:nameCollections[i], type:busca.type, enable:busca.enable})
    }

    console.log(list)

    console.log("Create list events!!")

    await db.close()
    console.log("Desconectado!!")
    return list
}



module.exports = {
    showCollections
}



