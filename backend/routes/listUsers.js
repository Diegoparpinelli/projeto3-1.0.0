const Router = require("express").Router()
const {listUsers} = require("../controllers/listUsersController")


Router.post("/",(req, res)=>{
    console.log(req.body)
    let listuser = listUsers(req.body.collectionName)
    .then(data => {res.send(JSON.stringify(data));
    console.log(data)
        }
    )
    
    
})

module.exports = Router