import {useState, useEffec} from "react"
import {useForm} from "react-hook-form"
import "./NovoEvento.css"








function NovoEvento(props){
   
    const {register, handleSubmit, watch, formState:{erros}} = useForm()
    
    function onSubmit(eventData){
        fetch(`http://localhost:3005/addAcces`,{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({acces:eventData, eventName:props.name})});
        
    }

    return(
        <div className="FloatMenu" id="FloatMenu">

                
            <div className="NewEventMenu">
            <div className="BtnConfig">
                                {props.button}
                            </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Mini Curso</label>
                    <input type="text" {...register("accesName")}></input>
                    <button id="accesBtn">Adicionar</button>
                </form>
            </div>
        </div>
    )
}

export default NovoEvento;