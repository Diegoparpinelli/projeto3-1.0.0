const Router = require("express").Router()
const dropCollection = require("../controllers/dropCollections")


Router.delete("/",(req, res)=>{

    console.log(req.body.eventName)
    
    dropCollection.dropCollection(req.body.eventName)
    res.sendStatus(200)

})

module.exports = Router
