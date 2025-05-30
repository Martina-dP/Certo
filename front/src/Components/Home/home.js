import React, { useState } from "react";
import NavHome from "./nav/navH";
import Product from "../Altas/Products/Products";
import Provider from "../Altas/Provides/Provider";
import NewClient from "../Altas/NewClient/NewClient";
import Category from "../Altas/Category/NewCategoty";
import NewSubCategory from "../Altas/NewSubCategory/NewSubCategory";
import Bank from "../Altas/Bank/Bank";
import PreBill from "../CashMovement/PreBill/PreBill";
import SingUp from '../Admin/newAccount/newAccount'
import ValidateRolUser from '../../Utils/ValidateUserRol'

import style from "./home.module.css";

function Home() {
  const [modals, setModals] = useState({
    optionsStock: false,
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

  const reportOptions = [
    { label: "Consulta de cheques emitidos", key: "chequesEmitidos" },
    { label: "Emitidos por banco", key: "emitidosBanco" },
    { label: "Emitidos por destinatario", key: "emitidosDestinatario" },
    { label: "Consulta vigente", key: "consultaVigente" },
    { label: "Ventas por año y mes", key: "ventasAnioMes" },
    { label: "Ventas por cliente", key: "ventasCliente" },
  ];

  const superAdminOptions = [
    { label: "Crear cuenta", key: "crearCuenta", Component: SingUp},
    { label: "Eliminar cuenta", key: "eliminarCuenta" },
  ];

  const toggleModal = (modal) => {
    setModals((prev) => ({ ...prev, [modal]: !prev[modal] }));
  };

  const currentUser = ValidateRolUser();
  console.log(currentUser)

  return (
    <div className={style.home_container}>
        <NavHome />
        <div className={style.home_body}>
          <div className={style.home_accions}>
            <div className={style.dropdownContainer}>
            <button onClick={() => toggleModal("optionsStock")} className={style.home_accions_bttns}>
              Stock
            </button>
            {modals.optionsStock && (
              <div className={style.stockOptions}> 
                <button className={style.optionsBttns}>Existencias</button>
                <button className={style.optionsBttns}>Existencias en cero</button>
                <button className={style.optionsBttns}>Debajo del mínimo</button>
              </div>
            )}
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
                      {Component && modals[key] && (
                        <Component closeModalPreBill={() => toggleModal(key)} />
                      )}
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
              <button onClick={() => toggleModal("optionsReportes")} className={style.home_accions_bttns}>
                Reportes
              </button>
              {modals.optionsReportes && (
                <div className={style.reportOptions}>
                  {reportOptions.map(({ label, key }) => (
                    <button key={key} className={style.optionsBttns} onClick={() => toggleModal(key)}>
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={style.dropdownContainer}>
              <button onClick={() => toggleModal("superAdmin")} className={style.home_accions_bttns}>
                Administrador
              </button>
              {modals.superAdmin && (
                <div className={style.superAdminOptions}>
                  {superAdminOptions.map(({ label, key, Component }) => (
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
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;