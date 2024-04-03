import React from 'react'
import style from './contact.module.css'

const Contact = () => {
    return (
        <div className = {style.all}>
            <span className = {style.titulo}>Contacto</span>
            <div className = {style.info}>
                <div className = {style.detalle}>
                    <span>Terminos y condiciones</span>
                    <span>Politicas de privacidad</span>
                </div>
                <div className = {style.detalle}>
                    <span>tel : +34600142049</span>
                    <span>email : delpiTecnologia@info.com</span>
                    <span>ubicacion : Buenos Aires, Argnetina</span>
                </div>
            </div>
        </div>
    )
}

export default Contact