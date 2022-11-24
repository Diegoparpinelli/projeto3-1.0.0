const {MongoClient} = require("mongodb")
const {createReadAcces} = require("../services/createReadAcces")

async function addAcces(collectionName, accesname, ){

    const db = new MongoClient("mongodb://0.0.0.0:27017")

    const presenca = db.db("presencaQRcode10")

    let data = await presenca.collection(collectionName).findOne({},{enable:1})
    console.log(data)
    let id = data._id

    await presenca.collection(collectionName).updateOne({_id:id},{$push: {acces:{accesName:accesname}}})
    await createReadAcces(collectionName, accesname)
    console.log(`Acces ${accesname} add sucefull!!`)
    db.close()
    console.log("disconect!!")
}


module.exports = {
    addAcces
}