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
    superAdmin: false,
  });

  const cashMoveOptions = [
    { label: "Nueva factura", key: "openPreBill", Component: PreBill },
    { label: "Ventas", key: "ventas" },
    { label: "Bono a cuenta", key: "bonoCuenta" },
    { label: "Saldo inicial", key: "saldoInicial" },
    { label: "Ingreso de efectivo", key: "ingresoEfectivo" },
    { label: "Egreso de efectivo", key: "egresoEfectivo" },
    { label: "Entregas parciales", key: "entregasParciales" },
    { label: "Movimiento de tarjetas", key: "movTarjetas" },
    { label: "Cheques recibidos", key: "chequesRecibidos" },
    { label: "Medios de pago", key: "mediosPago" },
    { label: "Movimiento de caja del día", key: "movCajaDia" },
  ];

  const altaOptions = [
    { label: "Nuevo proveedor", key: "openModelProvider", Component: Provider },
    { label: "Nuevo producto", key: "openModelProduct", Component: Product },
    { label: "Nuevo cliente", key: "openModelClient", Component: NewClient },
    { label: "Cargar categorías", key: "openModelCategory", Component: Category },
    { label: "Cargar subcategoría", key: "openModelSubCategory", Component: NewSubCategory },
    { label: "Cargar bancos", key: "openModelBank", Component: Bank },
  ];

  const toggleModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  return (
    <div className={style.home_container}>
        <NavHome />
        <div className={style.home_body}>
          <div className={style.home_accions}>
            <div className={style.dropdownContainer}>
              <button className={style.home_accions_bttns}>Stock</button>
            </div>

            {/* Movimiento de caja */}
            <div className={style.dropdownContainer}>
              <button onClick={() => toggleModal("optionsCashMove")} className={style.home_accions_bttns}>
                Movimiento de caja
              </button>
              {modals.optionsCashMove && (
                <div className={style.cashMoveOptions}>
                  {cashMoveOptions.map(({ label, key, Component }) => (
                    <div key={key}>
                      <button className={style.optionsBttns} onClick={() => toggleModal(key)}>
                        {label}
                      </button>
                      {Component && modals[key] && <Component closeModal={() => toggleModal(key)} />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Altas */}
            <div className={style.dropdownContainer}>
              <button onClick={() => toggleModal("optionsAlta")} className={style.home_accions_bttns}>
                Altas
              </button>
              {modals.optionsAlta && (
                <div className={style.altaOptions}>
                  {altaOptions.map(({ label, key, Component }) => (
                    <div key={key}>
                      <button className={style.optionsBttns} onClick={() => toggleModal(key)}>
                        {label}
                      </button>
                      {modals[key] && <Component closeModal={() => toggleModal(key)} />}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={style.dropdownContainer}>
              <button className={style.home_accions_bttns}>Gestión administrativa</button>
            </div>

            <div className={style.dropdownContainer}>
              <button className={style.home_accions_bttns}>Reportes</button>
            </div>

            <div className={style.dropdownContainer}>
              <button className={style.home_accions_bttns}>Super Administrador</button>
            </div>
          </div>

          {/* Busquedas rápidas */}
          <div className={style.quick_search_container}>
            <button className={style.bttn}>Búsquedas rápidas</button>
            <div className={style.quick_search_subcontainer}>
              <div className={style.quick_search_bttn}>
                <button className={style.bttn}> Consultar precio</button>
              </div>
              <div className={style.quick_search_bttn}>
              <button className={style.bttn}> Consultar existencia</button>
              {modals.superAdmin && (
                <div>
                  <ul>
                    <li>Dar alta Admin</li>
                    <li>Dar alta Empleados</li>
                    <li>Eliminar cuenta</li>
                  </ul>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;