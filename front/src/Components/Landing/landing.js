import React from 'react'; 
import { Link } from "react-router-dom";

export function Landing() {

    return(
        <div>
           <h1>Welcome</h1>
           <Link to = "/logIn">
              <button> Iniciar sesion </button>
            </Link>
        </div>
    )
};

export default Landing;