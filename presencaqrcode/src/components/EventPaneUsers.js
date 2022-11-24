import {useState, useEffect} from "react"
import NovoUser from "./NovoUser"
import "./EventPaneUsers.css"




function EventPaneUsers(){

    const [addUser, setAddUser] = useState(0)
    const [load, setLoad] = useState(false)
    const [listEvent, setListEvent] = useState([{name:""}])
    const [selectedEvent, setSelectedEvent] = useState("teste")
    const [ listUsers, setListUsers] = useState([{name:"diego"},{name:"diego"},{name:"diego"},{name:"diego"},{name:"diego"},{name:"diego"},{name:"diego"}])

    async function getListEvents(){
        await fetch("http://localhost:3005/listEvents").then(data => data.json()).then(data=> setListEvent(data))
    }

    async function getUsers(){
        console.log(selectedEvent)
       await fetch("http://localhost:3005/listUsers",{method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({collectionName:selectedEvent})}).then(data=> data.json()).then(data=> setListUsers(data))
    }

    function selectEvent(value){
        setSelectedEvent(String(value))
        console.log(value)
    }

    function showAddUser(){
        setAddUser(1);
    }

    function hidenUser(){
        setAddUser(0);
    }

    let addUserModal = addUser ?
    <NovoUser
                load={load} 
                setload={setLoad}
                collectionName={selectedEvent}
                listAcces={listUsers[0].acces}
                eventType={listUsers[0].type}
                button={<button className="NewEventBtnExit" id="NewEventBtnExit" onClick={()=>{hidenUser()}}>X</button>}
                >
    </NovoUser> : null;


    useEffect(
        ()=>{
            getListEvents();
        },
        []
        )

    useEffect(
         ()=>{
            getUsers(listEvent)
        },
        [selectedEvent,load]
    )


    return(
        <div className="eventPaneUsers">

        <div className="contentUser">
            <div className="userControl">
                <select onChange={(event)=>selectEvent(event.target.value)}>
                    {listEvent.map(elem=> <option values={elem.name}>{elem.name}</option> )}
                </select>

                <button onClick={()=>showAddUser()}>
                    ADD usuario
                </button>

            </div>

            <div className="usersPane">
                <ul>
                    {listUsers.map(elem=> <li><p>{elem.name}</p></li>)}
                </ul>
            </div>
        </div>

        {addUserModal}

        </div>
    )
}

export default EventPaneUsers