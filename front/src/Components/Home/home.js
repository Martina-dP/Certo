import React, { useState } from "react";
import NavHome from "./nav/navH";
import Product from "../Altas/Products/Products";
import Provider from "../Altas/Provides/Provider";
import NewClient from "../Altas/NewClient/NewClient";
import Category from "../Altas/Category/NewCategoty";
import NewSubCategory from "../Altas/NewSubCategory/NewSubCategory";
import Bank from "../Altas/Bank/Bank";
import PreBill from "../CashMovement/PreBill/PreBill";
import style from "./home.module.css";

function Home() {
  const [modals, setModals] = useState({
    optionsAlta: false,
    optionsCashMove: false,
    openPreBill: false,
    openModelProvider: false,
    openModelProduct: false,
    openModelClient: false,
    openModelCategory: false,
    openModelSubCategory: false,
    openModelBank: false,
  });

  const toggleModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  return (
    <div className={style.subTotal}>
      <div className={style.contenedor}>
        <NavHome />
        <div className={style.c}>
          <div className={style.parteUno}>
            <button className={style.bttn}>Stock</button>

            {/* Movimiento de caja */}
            <button onClick={() => toggleModal("optionsCashMove")} className={style.bttn}>
              Movimiento de caja
            </button>
            {modals.optionsCashMove && (
              <div className={style.optionsCashMove}>
                <button className={style.bttnALt} onClick={() => toggleModal("openPreBill")}>
                  Nueva factura
                </button>
                {modals.openPreBill && <PreBill closeModalPreBill={() => toggleModal("openPreBill")} />}
              </div>
            )}

            {/* Altas */}
            <button onClick={() => toggleModal("optionsAlta")} className={style.bttn}>
              Altas
            </button>
            {modals.optionsAlta && (
              <div className={style.optionsAlta}>
                {[
                  { label: "Nuevo proveedor", key: "openModelProvider", Component: Provider },
                  { label: "Nuevo producto", key: "openModelProduct", Component: Product },
                  { label: "Nuevo cliente", key: "openModelClient", Component: NewClient },
                  { label: "Cargar categorías", key: "openModelCategory", Component: Category },
                  { label: "Cargar subcategoría", key: "openModelSubCategory", Component: NewSubCategory },
                  { label: "Cargar bancos", key: "openModelBank", Component: Bank },
                ].map(({ label, key, Component }) => (
                  <div key={key}>
                    <button className={style.bttnALt} onClick={() => toggleModal(key)}>
                      {label}
                    </button>
                    {modals[key] && <Component closeModal={() => toggleModal(key)} />}
                  </div>
                ))}
              </div>
            )}

            <button className={style.bttn}>Gestión administrativa</button>
            <button className={style.bttn}>Reportes</button>
            <button className={style.bttn}>Super Administrador</button>
          </div>

          {/* Busquedas rápidas */}
          <div className={style.contenedor2}>
            <button className={style.bttnL}>Búsquedas rápidas</button>
            <div className={style.parteDos}>
              <button className={style.bttn}>Consultar precio</button>
              <button className={style.bttn}>Consultar existencia</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;