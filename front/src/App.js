import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login';
import Home from './Components/Home/home';
import SingUp from './Components/SingUp/singUP';
 
function App() {
  return (
    < BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/main" element= {<Home/>} />
          <Route path="/logIn" element= {<Login/>} />
          <Route path="/main/newAcount" element= {<SingUp/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

