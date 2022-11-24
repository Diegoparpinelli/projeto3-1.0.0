const {MongoClient} = require("mongodb")

async function listAcces(collectionName){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`)
    let Acces = await presenca.collection(collectionName).findOne({},{acces:1})
    let listAcces = Acces.acces
    console.log("Create List Acces!!")
    

    return JSON.stringify(listAcces.acces)
}



module.exports = {
    listAcces
}