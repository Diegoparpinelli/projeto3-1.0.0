
import camera from "./imgs/camera.svg"

function AccesEvent(props){

    return(
        <li>
            <p>{props.accesName}</p>
            <a href={`http://localhost:3005/acces/indexScan${props.accesName}.html`} target={"_blank"}><img src={camera}></img></a>
        </li>
    )
}

export default AccesEvent