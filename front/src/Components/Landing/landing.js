import React from 'react'; 
import style from "./landing.module.css";
import Nav from './nav/nav';
import About from './about/about';
import Work from './work/work';
import Vision from './vision/vision';
import Footer from './footer/footer';
import { Link } from 'react-router-dom';

export function Landing() {

    return(
        <div className = {style.total}>
            <Nav />
            <div className = {style.fuera}>
              <div className = {style.cabeza} id='home'>
                <span className = {style.titulo}>Estamos para ayudarte en tu administración</span>
                <span className = {style.subTitulo}>Domina tu inventario, impulsa tus ventas: Tu aliado en la gestión empresarial.</span>
                <div className = {style.bttnP}>
                  <Link to="/logIn">
                    <button className = {style.bttnInside}>Inicio sesion</button>
                  </Link>
                </div>
              </div>
                <About />
                <Work />
                <Vision />
            </div>
            <Footer />
        </div>
    )
};

export default Landing;