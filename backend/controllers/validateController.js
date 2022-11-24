const {MongoClient, Db} = require("mongodb")

async function validateController(collectionName, dataQrcode, pasEvent){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`)
    dataQrcode = JSON.parse(dataQrcode)
    console.log(`collectioName: ${collectionName}, dataQrcode: ${dataQrcode.acces}, passEvent: ${pasEvent}`)

    if(dataQrcode.type === "ticket"){

        let data = await  presenca.collection(collectionName).findOne({key:dataQrcode.key})

        if(data.present === false){

            await presenca.collection(collectionName).updateOne({key:dataQrcode.key}, {$set:{present:true}})

            db.close

            return JSON.stringify({code:1,userName:data.name,eventName:pasEvent})
        }else{

            db.close()

            return JSON.stringify({code:2})
        }
    }else if(dataQrcode.type === "pass"){

        let data = await  presenca.collection(collectionName).findOne({key:dataQrcode.key})

        if(dataQrcode.acces.find(elem => elem === pasEvent)){

            if(data.present === false){
                await presenca.collection(collectionName).updateOne({key:dataQrcode.key}, {$set:{present:true}})

            db.close()

            return JSON.stringify({code:1,userName:data.name,eventName:pasEvent})
            }else{

                return JSON.stringify({code:2})
            }
        }else{

            db.close()

            return JSON.stringify({code:3})
        }
    }else{

        db.close()

        return JSON.stringify({code:4})
    }

}

module.exports = {
    validateController
}