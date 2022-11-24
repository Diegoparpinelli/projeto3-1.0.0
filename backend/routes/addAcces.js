const Router = require("express").Router()
const addAcces = require("../controllers/addAcces")


Router.post("/",(req, res)=>{
    addAcces.addAcces(req.body.eventName, req.body.acces.accesName)
})

module.exports = Router