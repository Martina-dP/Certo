import React from 'react'; 
import style from "./footer.module.css";
import img1 from "../../Media/logo.png"


export function Footer() {

    return(
        <div className={style.general}>
            <img className={style.img} src={img1} alt=" img not found"/>
        </div>
    )
};

export default Footer;