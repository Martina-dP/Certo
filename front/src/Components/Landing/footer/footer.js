import React from 'react'; 
import style from "./footer.module.css";
import img1 from "../../Media/3.png"

export function Footer() {

    return(
        <div className={style.general} id='contact'>
            <div className = {style.detalle}>
                <p>tel : +34600142049</p>
                <p>email : delpiTecnologia@info.com</p>
                <p>ubicacion : Buenos Aires, Argnetina</p>
            </div>
            <img className={style.img} src={img1} alt=" img not found"/>
            <div className = {style.detalle}>
                <span>Terminos y condiciones</span>
                <span>Politicas de privacidad</span>
            </div> 
        </div>
    )
};

export default Footer;