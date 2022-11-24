const cryptoJs = require("crypto-js")

function encrypt(content, ps){
const encrypted = cryptoJs.AES.encrypt(content, ps).toString()
return encrypted
}



function decrypt(content, ps){
const decrypted = cryptoJs.AES.decrypt(content, ps)


return decrypted.toString(cryptoJs.enc.Utf8)
}





module.exports = {
    encrypt,
    decrypt
}