import React, { useState }  from "react";
import NavHome from "./nav/navH";
import Product from "../Altas/Products/Products";
import Provider from "../Altas/Provides/Provider";
import NewClient from "../Altas/NewClient/NewClient";
import Category from "../Altas/Category/NewCategoty";
import NewSubCategory from "../Altas/NewSubCategory/NewSubCategory";
import style from "./home.module.css"
import Bank from "../Altas/Bank/Bank";

function Home() {

  const [optionsAlta, setOptionsAlta] = useState(false)
  const [openModelProduct, setOpenModelProduct] = useState(false)
  const [openModelProvider, setOpenModelProvider] = useState(false)
  const [openModelClient, setOpenModelClient] = useState(false)
  const [openModelCategory, setOpenModelCategory] = useState(false)
  const [openModelSubCategory, setOpenModelSubCategory] = useState(false)
  const [openModelBank, setOpenModelBank] = useState(false)

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
              <button onClick={() => setOptionsAlta(!optionsAlta)} className={style.bttn}>Altas</button>
              {optionsAlta === true ?(
              <div className={style.optionsAlta}>
                <button className={style.bttnALt} onClick={() => setOpenModelProvider(true)}>Nuevo proveedor</button>
                {openModelProvider && <Provider closeModalProvider={setOpenModelProvider} />}
                <button className={style.bttnALt} onClick={() => setOpenModelProduct(true)}>Nuevo producto</button>
                {openModelProduct && <Product closeModalProduct={setOpenModelProduct} />}
                <button className={style.bttnALt} onClick={() => setOpenModelClient(true)}>Nuevo cliente</button>
                {openModelClient && <NewClient closeModalClient={setOpenModelClient} />}
                <button className={style.bttnALt} onClick={() => setOpenModelCategory(true)}>Cargar categorias</button>
                {openModelCategory && <Category closeModalCategory={setOpenModelCategory} />}
                <button className={style.bttnALt} onClick={() => setOpenModelSubCategory(true)}>Cargar subcategoria</button>
                {openModelSubCategory && <NewSubCategory closeModalSubategory={setOpenModelSubCategory} />}
                <button className={style.bttnALt}  onClick={() => setOpenModelBank(true)}>Cargar Bancos</button>
                {openModelBank && <Bank closeModalBank={setOpenModelBank} />}
              </div>
              ): ""}
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