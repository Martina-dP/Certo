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
                        {/* <a href="#about">Quienes somos</a>
                        <a href="#work">Que hacemos</a>
                        <a href="#vison">Nuestra vision</a>
                        <a href="#contact">Contacto</a> */}
                        <span className={style.s}>Quienes somos</span>
                        <span className={style.s}>Que hacemos</span>
                        <span className={style.s}>Nuestra vision</span>
                        <span className={style.s}>Contacto</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;