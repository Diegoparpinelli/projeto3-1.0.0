const Router = require("express").Router()
const {listAcces} = require("../controllers/listAcces")



Router.post("/",async(req, res)=>{
    let dat = await listAcces(req.body.collectionName)
    res.send(dat)
})


module.exports = Router