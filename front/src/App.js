import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login';
import Home from './Components/Home/home';
 
function App() {
  return (
    < BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/main" element= {<Home/>} />
          <Route path="/logIn" element= {<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

