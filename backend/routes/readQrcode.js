const Router = require("express").Router()
const {readQRcode} = require("../controllers/readQRcode")
const {validateController} = require("../controllers/validateController")


Router.post("/",async (req, res)=>{
    const dataQrcode = await readQRcode(req.body.collectionName, req.body.qrcode);

    console.log(dataQrcode)
    
    const validate = await validateController(req.body.collectionName, JSON.stringify(dataQrcode), req.body.acces);
    res.send(validate)
})

module.exports = Router