import React from 'react'; 
import style from "./footer.module.css";
import img1 from "../../Media/3.png"

export function Footer() {

    return(
        <div className={style.general}>
            <span className = {style.titulo}>Contacto</span>
            <div className = {style.detalle}>
                <span>Terminos y condiciones</span>
                <span>Politicas de privacidad</span>
            </div>         
            <img className={style.img} src={img1} alt=" img not found"/>
            <div className = {style.detalle}>
                <span>tel : +34600142049</span>
                <span>email : delpiTecnologia@info.com</span>
                <span>ubicacion : Buenos Aires, Argnetina</span>
            </div>
        </div>
    )
};

export default Footer;