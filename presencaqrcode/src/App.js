
import './App.css';
import Menu from"./components/Menu"
import EventPane from"./components/EventPane"
import NovoEvento from './components/NovoEvento';
import EventPaneUsers from './components/EventPaneUsers';
import{useState} from "react";




function App() {
  const [page, setPage] = useState(1)



  return (
    <div className="App">
        <Menu setpage={(setPage)}></Menu>
        <div className="Content">
          {page ? <EventPane></EventPane> : <EventPaneUsers></EventPaneUsers>}
        </div>
    </div>
  );
}

export default App;
