const {MongoClient} = require("mongodb")
const {decrypt} = require("../services/addCripty")

async function readQRcode(collectionName, content){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`)
    const data = await presenca.collection(collectionName).findOne({},{ps:1})
    console.log("data")
    console.log(data)

    let qrcode

    try{
        qrcode = JSON.parse(decrypt(content, data.ps))
        qrcode.type = data.type
        console.log(qrcode)
    }catch (error) {
        console.log(error)
        console.log("Falha de vereficação")
         qrcode = {acces:"invalido"}
    }
   

    
    
    

    db.close()

    return qrcode
}
module.exports = {
    readQRcode
}