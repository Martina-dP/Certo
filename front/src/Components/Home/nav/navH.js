import React from "react";
import style from "./navH.module.css"
import { Link } from "react-router-dom";

const NavHome = () => {

    return (
        <div className={style.nav}>
            <div className={style.general}>
                <div className={style.sub}>
                    <div>
                        <span className={style.title}>DELPI Tecnología</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
export default NavHome;