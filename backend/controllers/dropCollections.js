const {MongoClient} = require("mongodb")


async function dropCollection(collectionName){

    console.log(collectionName)

    const db = new MongoClient("mongodb://0.0.0.0:27017")

    const presenca = db.db("presencaQRcode10")
    presenca.collection(collectionName).drop((err, ok)=>{
        if(err) throw err;
        if(ok) console.log(`Event ${collectionName} removed!!`);
        db.close
        console.log("Disconect!!")
    })

}


module.exports = {
    dropCollection
}