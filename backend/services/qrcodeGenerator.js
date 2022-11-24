const qrCode = require("qrcode")

 function qrcodeGenerator(content, cpf){
    qrCode.toFile(`../imgs/qrcodes/${cpf}.svg`, content, [{"type":"svg","width":60}])
    }


module.exports = {
    qrcodeGenerator
}
