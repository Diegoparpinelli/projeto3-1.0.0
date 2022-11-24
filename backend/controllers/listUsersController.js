const {MongoClient} = require("mongodb")

async function listUsers(collectionName){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`).collection(collectionName)
    let listUsers = await presenca.find({}).toArray()

    console.log("Crete List Users!!")

    db.close()

    return listUsers
}


module.exports = {
    listUsers
}