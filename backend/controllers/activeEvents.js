const {MongoClient} = require("mongodb")

async function activeEvents(collectionName,value){

    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db("presencaQRcode10")
    let data = await presenca.collection(collectionName).findOne({},{enable:1})
    let id = data._id

    console.log(id)

    await presenca.collection(collectionName).updateOne({_id:id},{$set: {enable:value}})
    console.log(`Event ${collectionName} Actived!!`)
    db.close()
    console.log("Disconect!!")

}

module.exports = {
    activeEvents
}