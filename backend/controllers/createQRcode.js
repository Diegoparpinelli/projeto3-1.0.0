const {MongoClient, ObjectId} = require("mongodb")
const {qrcodeGenerator} = require("../services/qrcodeGenerator")
const qrcodeTicketSchema = require("../models/qrcodeTicket")
const qrcodePassSchema = require("../models/qrcodePass")
const {encrypt} = require("../services/addCripty")


async function createQRcode(collectionName, type, userCpf){
    const db = new MongoClient(`mongodb://0.0.0.0:27017`)
    const presenca = db.db(`presencaQRcode10`)
    const userId = await presenca.collection(collectionName).findOne({cpf:userCpf})
    const data = await presenca.collection(collectionName).findOne({_id:ObjectId(userId._id)})
    const ps = await presenca.collection(collectionName).findOne({},{_id:0, ps:1})
    

    console.log(data)
    let contentQrcode

    if(type === "ticket"){
        contentQrcode = new qrcodeTicketSchema(data.name, data.key)
    }else{
        contentQrcode = new qrcodePassSchema(data.name, data.key, data.acces)
    }

    
    console.log(contentQrcode)
     qrcodeGenerator(encrypt(`${JSON.stringify(contentQrcode)}`, ps.ps), data.cpf)

    db.close()
}

module.exports = {
    createQRcode
}