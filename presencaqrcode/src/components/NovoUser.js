
import { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import "./NovoUser.css"








function NovoUser(props){
    const [acces, setAcces] = useState([])
    const {register, handleSubmit, watch, formState:{erros}} = useForm()


    async function addUser(UserData){
        await fetch(`http://localhost:3005/addUsers`,{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(UserData)});

        setTimeout(
        ()=>{props.setload(!props.load)}
        ,100);
    }
    
    async function onSubmit(UserData){
        UserData.eventName = props.collectionName;
        console.log(UserData);
         addUser(UserData)
        
        
    }
    useEffect(()=>{
        
            if(props.eventType === "pass"){
                setAcces(props.listAcces)}
        }
    ,[])



    return(
        <div className="FloatMenu" id="FloatMenu">

                
            <div className="FloatMenuContent">

            <div className="BtnFechar">

                 {props.button}
                 </div>

                    <form className="FormContent"  onSubmit={handleSubmit(onSubmit)}>

                        <label>Nome do Usuario</label>
                        <input type="text" {...register("userName")}></input>

                        <label>CPF</label>
                        <input type="text" {...register("userCpf")}></input>

                        <label>EMAIL</label>
                        <input type="email" {...register("userEmail")}></input>

                        <label>TELEFONE</label>
                        <input type="phone" {...register("userPhone")}></input>

                        <ul className="AccesList">
                            {acces.map(elem=>
                                 <li>
                                     <label fot>{elem.accesName}</label>
                                     <input value={elem.accesName} type="checkbox" {...register("userAcces")}></input>
                                 </li>
                            )}
                        </ul>
                        <button>Adicionar</button>
                    </form>
            </div>
        </div>
    )
}

export default NovoUser;