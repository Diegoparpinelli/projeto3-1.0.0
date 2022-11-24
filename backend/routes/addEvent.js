const Router = require("express").Router()
const eventController = require("../controllers/eventController")


Router.post("/", (req, res)=>{

    if(req.body.eventType === "ticket"){
        eventController.addEventTicket(req.body.eventName)
    }else if(req.body.eventType === "pass"){
        eventController.addEventPass(req.body.eventName)
    }
    res.sendStatus(201)

})


module.exports = Router

