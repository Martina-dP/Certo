import React from "react";
import NavHome from "./nav/navH"
import style from "./home.module.css"

function Home() {

  return(
      <div className={style.subTotal}>
        <div className={style.contenedor}>
        <NavHome />
        <div className={style.c}>
          <div className={style.parteUno}>
            <div>
              <button className={style.bttn}>Stock</button>
            </div>
            <div>
              <button className={style.bttn}>Movimineto de caja</button>
            </div>
            <div>
              <button className={style.bttn}>Altas</button>
            </div>
            <div>
              <button className={style.bttn}>Gestion administrativa</button>
            </div>
            <div>
              <button className={style.bttn}>Reportes</button>
            </div>
            <div>
              <button className={style.bttn}>Super Administrador</button>
            </div>
          </div>
          <div className={style.contenedor2}>
            <button className={style.bttnL}>Busquedas rapidas</button>
            <div  className={style.parteDos}>
              <button className={style.bttn}>Consultar precio</button>
              <button className={style.bttn}>Consultar existencia</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )} 

export default Home;