import logo from "./logo.svg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Tost from "./assets/tost";
import Nav from "./Nav/nav";
import List from "./views/list/list";
import GetTime from "./views/time/time";
import IndexCard from "./views/card";
import IndexForm from "./views/form";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} width={"500px"} className="App-logo mb-3" alt="logo" />
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path="/" element={<GetTime />} />
              <Route exact path="/List" element={<List />} />
              <Route exact path="/Card" element={<IndexCard />} />
              <Route exact path="/Form" element={<IndexForm />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
     <Tost />

      
    </>
  );
}

export default App;
