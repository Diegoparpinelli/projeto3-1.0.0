import excluir from "./imgs/lixoFechado.svg"
import camera from "./imgs/camera.svg"
import imgDesativar from "./imgs/ligar.svg"
import imgAtivar from "./imgs/ligarAmarelo.svg"
import add from "./imgs/add.svg"
import AccesEvent from "./AccesEvent"

import NovoAcces from "./novoAcces"

import {useState, useEffect} from "react"

function Pass(props){

    const [acces, setAcces] = useState(false)

    useEffect(()=>{},
    [acces])

    function showAcces(){
        setAcces(true)
    }

    function hidenAcces(){
        setAcces(false)
    }

    const teste = acces ?
                        <NovoAcces name={props.name} button={<button className="NewEventBtnExit" id="NewEventBtnExit" onClick={()=>hidenAcces()}>X</button>}>

                        </NovoAcces>
                       :null;






    const [activeStatus, setActiveStatus] = useState(props.enable)
    const [activateImg, setActivateImg] = useState(activeStatus ? imgAtivar : imgDesativar)
    const [accesList, setAccesList] = useState([])
    const [showAccesState, setShowAccesState] = useState(false)

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

    async function getAcces(collectionName){
        await fetch("http://localhost:3005/listUsers",{method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({collectionName:props.name})})
       .then(data=> data.json()).then(data=> setAccesList(data))
    }

    function showAccesb(){

        setShowAccesState(!showAccesState)
    }

    const showAccesList = showAccesState ? accesList[0].acces.map(elem => <AccesEvent accesName={elem.accesName}></AccesEvent>) : null;

    useEffect(
        ()=>{getAcces()},
        []
    )

    useEffect(()=>{},[activeStatus])

    return(
        <li className="Pass" >
            <p onClick={()=>showAccesb()}>{props.name}</p>
            <img src={add} onClick={()=>showAcces()} alt="add mini curso"></img>
            <img src={excluir} onClick={()=>remove(props.name)} alt="remover"></img>
            <img src={activateImg} onClick={()=>activate(props.name)} alt="ativar"></img>
            <a href={`http://localhost:3005/acces/indexScan${props.name}.html`} target={"_blank"}><img src={camera}></img></a>
            {teste}

           {showAccesList}
        </li>
        
    
    )

}

export default Pass