const {Router, static} = require("express")

const router = Router()



router.get("/", (req, res)=> res.sendFile("../view/index.html"))

module.exports = router