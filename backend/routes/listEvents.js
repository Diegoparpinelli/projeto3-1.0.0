const Router = require("express").Router()
const listCollections = require("../controllers/listCollectionsController")

Router.get("/", (req, res)=>{
    listCollections.showCollections().then(elem => 
        res.send(JSON.stringify(elem)).status(200)
        )

})

module.exports = Router