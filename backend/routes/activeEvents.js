const Router = require("express").Router()
const activeEvent = require("../controllers/activeEvents")

Router.post("/",(req, res)=>{
    activeEvent.activeEvents(req.body.eventName,req.body.value)
    res.sendStatus(200)
})

module.exports = Router