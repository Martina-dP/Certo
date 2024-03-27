import React from "react";
import style from "./navH.module.css"

const NavHome = () => {

    return (
        <div className={style.nav}>
            <div className={style.general}>
                <div className={style.sub}>
                    <div>
                        <span className={style.title}>DELPI Tecnología</span>
                    </div>
                    <div>
                        <button className={style.bttnInside}>Crear cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NavHome;