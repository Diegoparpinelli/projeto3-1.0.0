const fs = require("fs")






async function createReadAcces(collectionName, accesName){

  const texto = "`${data.userName}\\nSeja bem vindo ao ${data.eventName}!`"


    const html = 
`
<!DOCTYPE html>
<html>
  <head>
    <title>Instascan</title>
    <script type="text/javascript" src="instascan.min.js"></script> 
    <style>
        html{
            width: 100%;
            height: 100%;
            margin: 0px;

        }
      body{
        width: 100%;
        height: 100%;
        margin: 0px;
        display: flex;
        justify-content: space-around;
      }
      #preview{
        width: 1024px;
        
      }

      #ok{
        background-color: rgb(16, 168, 16);
        width: 100%;
        height: 100%;
        color: rgb(235, 239, 241);
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size:5em;
        display: none;
        
      }
      #reok{
        background-color: rgb(8, 108, 166);
        width: 100%;
        height: 100%;
        color: rgb(235, 239, 241);
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size:5em;
        display: none;
      }
      #invalid{
        background-color: rgb(165, 5, 18);
        width: 100%;
        height: 100%;
        color: rgb(235, 239, 241);
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size:5em;
        display: none;
      }
      #error{
        background-color: rgb(165, 5, 18);
        width: 100%;
        height: 100%;
        color: rgb(235, 239, 241);
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-size:5em;
        display: none;
      }
    </style>
  </head>
  <body>
    
    <video id="preview"></video>
    
    <div id="ok"> </div>
    <div id="reok"></div>
    <div id="invalid"></div>
    <div id="error"></div>



    <script type="text/javascript">
      var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content, image) {
        console.log(content);
        fetch("http://localhost:3005/readQRcode",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({qrcode:content, acces:"${accesName}", collectionName:"${collectionName}"})})
        .then(data=> data.json()).then(data=> {
            console.log(data.code);
            switch (data.code) {
                case 1:
                    document.getElementById("preview").style.display = "none" 
                    document.getElementById("reok").style.fontSize = "5em"
                    document.getElementById("reok").style.color = "#fff"
                    document.getElementById("reok").style.alignItems = "center"
                    document.getElementById("reok").style.justifyContent = "center"
                    document.getElementById("ok").innerText= ${texto}
                    document.getElementById("ok").style.display = "flex"
                    setTimeout(()=>document.getElementById('ok').style.display="none" , 3000)
                    setTimeout(()=>document.getElementById('preview').style.display="flex" , 3000)

                    break;

                    case 2:
                    document.getElementById("preview").style.display = "none" 
                    document.getElementById("reok").style.fontSize = "5em"
                    document.getElementById("reok").style.color = "#fff"
                    document.getElementById("reok").style.alignItems = "center"
                    document.getElementById("reok").style.justifyContent = "center"
                    document.getElementById("reok").innerText= "Presença já confirmada!"
                    document.getElementById("reok").style.display = "flex"
                    setTimeout(()=>document.getElementById('reok').style.display="none" , 3000)
                    setTimeout(()=>document.getElementById('preview').style.display="flex" , 3000)

                    break;
                    case 3:
                    document.getElementById("preview").style.display = "none" 
                    document.getElementById("reok").style.fontSize = "5em"
                    document.getElementById("reok").style.color = "#fff"
                    document.getElementById("reok").style.alignItems = "center"
                    document.getElementById("reok").style.justifyContent = "center"
                    document.getElementById("invalid").innerText= "Passe invalido!"
                    document.getElementById("invalid").style.display = "flex"
                    setTimeout(()=>document.getElementById('invalid').style.display="none" , 3000)
                    setTimeout(()=>document.getElementById('preview').style.display="flex" , 3000)

                    break;

                    case 4:
                    document.getElementById("preview").style.display = "none" 
                    document.getElementById("reok").style.fontSize = "5em"
                    document.getElementById("reok").style.color = "#fff"
                    document.getElementById("reok").style.alignItems = "center"
                    document.getElementById("reok").style.justifyContent = "center"
                    document.getElementById("error").innerText= "Invalido!"
                    document.getElementById("error").style.display = "flex"
                    setTimeout(()=>document.getElementById('error').style.display="none" , 3000)
                    setTimeout(()=>document.getElementById('preview').style.display="flex" , 3000)

                    break;
            
                default:
                    break;
            }
        })
      });

      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        }
      });
    </script> 
  </body>
</html>

`





    fs.writeFileSync(`./view/acces/indexScan${accesName}.html`,html,
    (erro)=>{
        if(erro){
          console.log("erro",erro)
        }console.log("sucesso")
      })
}


module.exports = {
    createReadAcces
}




