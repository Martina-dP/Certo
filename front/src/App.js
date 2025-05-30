import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/landing';
import Login from './Components/Login/login';
import Home from './Components/Home/home';
// import SingUp from './Components/SingUp/singUP';
import ProtectedRoute from './Utils/ProtectedRoute';

function App() {
  return (
    < BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/main" element={<ProtectedRoute element={<Home />} />} />
          {/* <Route path="/newAccount" element={<ProtectedRoute element= {<SingUp/>}/>} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;

