import React from "react";
import style from "./nav.module.css"
import { Link } from "react-router-dom"

const Nav = () => {

    return (
        <div className={style.nav}>
            <div className={style.general}>
                <div className={style.sub}>
                    <div>
                        <span className={style.title}>DELPI Tecnología</span>
                    </div>
                    <div className={style.links}>
                    <Link to="#about" className={style.s}>Quienes somos</Link>
                    <Link to="#work" className={style.s}>Que hacemos</Link>
                    <Link to="#vision" className={style.s}>Nuestra visión</Link>
                    <Link to="#contact" className={style.s}>Contacto</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;