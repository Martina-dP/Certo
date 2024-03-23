import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login';
 
function App() {
  return (
    < BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/logIn" element= {<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

