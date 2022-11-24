const express = require("express")
const cors = require("cors")

const app = express()


app.use(express.json())
app.use(express.static("./view"))
app.use(cors({origin:"http://localhost:3000"}))



app.use("/",require("./routes/router.js"))


app.listen(3005,()=>console.log("server on port 3005"))