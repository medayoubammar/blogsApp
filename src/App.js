import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import Create from "./components/Create";
function App() {

  return (
    <Router>
    <Navbar /> 
    <Routes>
    <Route exact path="/" element={ <Home />} />
    <Route exact path="/create" element={ <Create />} />
    </Routes>
    </Router>
   
  );
}

export default App;
