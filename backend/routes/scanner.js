const Router = require("express").Router()

 
Router.post("/",(req, res)=>{
    console.log("SCANNER SEND")
    console.log(req.body)
    if(req.body.acces === "pass" || req.body.acces === "ticket"){
        res.sendFile("C:\\Users\\diego\\Desktop\\projeto 3\\backend\\view\\indexScan.html")
    }else{
    res.sendFile(`../view/acces/indexScan${req.body.acces}.html`)}
})

module.exports = Router

