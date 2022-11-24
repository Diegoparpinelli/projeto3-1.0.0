
import excluir from "./imgs/lixoFechado.svg"
import camera from "./imgs/camera.svg"
import imgDesativar from "./imgs/ligar.svg"
import imgAtivar from "./imgs/ligarAmarelo.svg"


import {useState, useEffect} from "react"


function Ticket(props){

    const [activeStatus, setActiveStatus] = useState(props.enable)
    const [activateImg, setActivateImg] = useState(activeStatus ? imgAtivar : imgDesativar)

    
    
    async function activate(collectionName){
         //colocar requisição para api aqui
        setActiveStatus(!activeStatus)
        setActivateImg(activeStatus ? imgDesativar : imgAtivar)
        fetch(`http://localhost:3005/activeEvents`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventName:collectionName, value:!activeStatus})})
    }
    
    async function remove(collectionName){
        await fetch(`http://localhost:3005/rmvEvents`,
        {method:"DELETE",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({eventName:collectionName})})
        props.setload(!props.load)
        

    }



    useEffect(()=>{},[activeStatus])

    return(
        <li className="Ticket" >
            <p>{props.name}</p>
            <img src={excluir} onClick={()=>remove(props.name)}></img>
            <img src={activateImg} onClick={()=>activate(props.name)}></img>
            <a href={`http://localhost:3005/acces/indexScan${props.name}.html`} target={"_blank"}><img src={camera}></img></a>
        </li>
    )
}

export default Ticket