import React, { useState } from "react";
import style from "./PreBill.module.css"
import NewBill from "../Bills/Bills";

function PreBill ({closeModalPreBill}) {

    const [openA, setOpenA] = useState(false)
    const [openB, setOpenB] = useState(false)

    

return(
    <div className={style.backgroundModal}>
        <div className={style.contenedorModel}>
            <div className={style.contenedorBttnClose}>
                <button className={style.bttnClose} onClick={() => closeModalPreBill(false)}> X </button>
            </div>
            <div className={style.bodyM}>
                <div className={style.seccionM}>
                    <button className={style.bttn} onClick={() =>setOpenA(true)}> Factura A </button>
                    {openA  && <NewBill closeModalBill={setOpenA}/>}
                </div>
                <div className={style.seccionM}>
                    <button className={style.bttn} onClick={() => setOpenB(true)}>Factura B</button>
                    {openB && <NewBill closeModalBill={setOpenB}/>}
                </div>
            </div>
        </div>
    </div>
)} 

export default PreBill;