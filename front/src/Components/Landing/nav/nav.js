import React from "react";
import style from "./nav.module.css"

const Nav = () => {

    return (
        <div className={style.nav}>
            <div className={style.general}>
                <div className={style.sub}>
                    <div>
                        <a href="#home" className={style.title}>DELPI Tecnología</a>
                    </div>
                    <div className={style.links}>
                    <a href="#about" className={style.s}>Quienes somos</a>
                    <a href="#work" className={style.s}>Que hacemos</a>
                    <a href="#vision" className={style.s}>Nuestra visión</a>
                    <a href="#contact" className={style.s}>Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;