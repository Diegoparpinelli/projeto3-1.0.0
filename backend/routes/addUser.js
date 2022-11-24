const Router = require("express").Router()
const userController = require("../controllers/userController")
const createQRcode = require("../controllers/createQRcode")


Router.post("/", async (req, res)=>{
    console.log(req.body)
    await userController.addUser(req.body.eventName, req.body.userName, req.body.userEmail, req.body.userPhone, req.body.userAcces, req.body.userCpf)
    await createQRcode.createQRcode(req.body.eventName, req.body.userType, req.body.userCpf )
    res.sendStatus(201)
})

module.exports = Router