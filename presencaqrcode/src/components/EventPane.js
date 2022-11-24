import "./EventPane.css"
import NovoEvento from "./NovoEvento"
import Pass from "./Pass"
import Ticket from "./Ticket"



import React, { useState, useEffect } from 'react';





 function EventPane(){

    const [list, setList] = useState([])
    const [load, setLoad] = useState(false)

    
    useEffect(()=>{atualizarLista();
    },
    [load])

 
   function atualizarLista(){
        fetch(`http://localhost:3005/listEvents`).then(data=> data.json()).then(data=> setList(data))
   }


    const [evento, setEvento] = useState(false)

    useEffect(()=>{},
    [evento])

    function showEvento(){
        setEvento(true)
    }

    function hidenEvento(){
        setEvento(false)
    }

    const teste = evento ?
                        <NovoEvento 
                        load={load} 
                        setload={setLoad}
                        button={<button className="NewEventBtnExit" id="NewEventBtnExit" onClick={()=>{hidenEvento()}}>X</button>}
                        >

                        </NovoEvento>
                       :null;

    function activeEvent(){
        console.log("ATIVAR DESATIVAR EVENTO")
        
    }


return(

    <div className="EventPane" >
                    <div className="EventBord">
                    
                            <div>
                            <input type="text"></input>
                            <button onClick={()=>fetch(`http://10.0.0.118:3005/listEvents`)
                            .then(data=> data.json())
                            .then(data=> setList(data))}>Pesquisar</button>
                            </div>
                       
                        <button className="NEBtn" onClick={()=>showEvento()} >Novo Evento</button>
                    </div>

                    <div className="ListEvents" id="ListEvents">
                        <ul>
                        {list.map(elem=>{
                        if(elem.type === "ticket"){
                            return <Ticket setload={setLoad} load={load} name={elem.name} enable={elem.enable}></Ticket>

                        }else{
                            return  <Pass setload={setLoad} load={load} name={elem.name} enable={elem.enable}></Pass>
                        }
                    })}
        
                        </ul>
                    </div>
                   {teste}

            

    </div>
)
}

export default EventPane;