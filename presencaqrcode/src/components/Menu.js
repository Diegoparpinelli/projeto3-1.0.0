
import "./Menu.css";
// import logo from "./logo.png"
import {useState} from "react"


function Menu(props){






    return(
        <div className="Menu">
            <aside>
                <nav>

                    <div className="MenuImg">
                        <img ></img>
                    </div>

                     <div className="MenuButton">
                        <ul>
                            <li id="BtnEvent">    
                                <p onClick={()=> props.setpage(1)}>Eventos</p>
                            </li>

                            <li>
                                <p onClick={()=> props.setpage(0)}>Usuarios</p>
                            </li>

                        </ul>
                    </div>

                </nav>
            </aside>

        </div>
    )
}

export default Menu;