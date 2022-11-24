import {useState, useEffec} from "react"
import {useForm} from "react-hook-form"
import "./NovoEvento.css"








function NovoEvento(props){

    const {register, handleSubmit, watch, formState:{erros}} = useForm()

    async function addEvent(eventData){
        await fetch(`http://localhost:3005/addEvents`,
        {method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(eventData)})
        
        setTimeout(
        ()=>{props.setload(!props.load)}
        ,100)
    }
    
    async function onSubmit(eventData){
        addEvent(eventData)
        
        
    }

    return(
        <div className="FloatMenu" id="FloatMenu">

                
            <div className="NewEventMenu">
            <div className="BtnConfig">
                                {props.button}
                            </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Envento</label>
                    <input type="text" {...register("eventName")}></input>
                    <label>Tipo</label>
                    <select {...register("eventType")} >
                        <option>ticket</option>
                        <option>pass</option>
                    </select>
                    <button  >Criar</button>
                </form>
            </div>
        </div>
    )
}

export default NovoEvento;