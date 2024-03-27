import React from 'react'
import img1 from "../../Media/modelEJ.jpg"
import style from './work.module.css'

const Work = () => {
    return (
        <div className = {style.all} id='about'>
            <div className = {style.dos}>
                <img className={style.img} src={img1} alt=" img not found"/>
            </div>
            <div className = {style.uno}>
                <div className = {style.tittle}>
                    <span >Que hacemos</span>
                </div>
                <div className = {style.text}>
                    <span className = {style.text2}>Desarrollamos y proporcionamos una plataforma integral para el manejo de stock y la administración de caja chica, diseñada específicamente para las necesidades únicas de los comercios de tamaño reducido. Nuestra aplicación web ofrece herramientas intuitivas y poderosas que permiten a nuestros clientes gestionar eficazmente sus inventarios, realizar un seguimiento preciso de sus ventas y gastos, y tomar decisiones informadas para impulsar el crecimiento de sus negocios.</span>
                </div>
            </div>
        </div>
    )
}

export default Work