const {Router, static} = require("express")


const router = Router()



//web pages
router.use("/", require("./home.js"))


//API endpoints
router.use("/addEvents", require("./addEvent"))
router.use("/addUsers", require("./addUser"))
router.use("/listEvents", require("./listEvents"))
router.use("/rmvEvents", require("./rmvEvent"))
router.use("/activeEvents", require("./activeEvents"))
router.use("/addAcces", require("./addAcces"))
router.use("/scanner", require("./scanner"))
router.use("/readQRcode", require("./readQrcode"))
router.use("/listUsers", require("./listUsers"))
router.use("/listAcces", require("./listAcces"))

module.exports = router