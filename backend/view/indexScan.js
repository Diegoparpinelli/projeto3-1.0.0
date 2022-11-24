import Instascan from "instascan";


var scanner = new Instascan.Scanner({video:document.getElementById("preview")})
scanner.addListener("scan", (content, image)=>{
    console.log(content)
})

Instascan.Camera.getCameras().then(cameras=>{
    if(cameras.length > 0){
        scanner.start(cameras[0])
    }
})