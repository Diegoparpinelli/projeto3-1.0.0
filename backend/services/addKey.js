const {keyGenerator} = require("./keyGenerator")
const {MongoClient} = require("mongodb")


async function addKey(collectionName){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`)
        let query
        let passwd 
    do{
        passwd = keyGenerator(20)
        query = await presenca.collection(collectionName).findOne({key:passwd})
    }while(query !== null)
    db.close()

   return passwd

}

module.exports = {
    addKey
}