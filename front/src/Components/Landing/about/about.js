import React from 'react'
import img1 from "../../Media/modelEJ.jpg"
import style from './about.module.css'

const About = () => {
    return (
        <div className = {style.fuera} id='about'>
        <div className = {style.all} id='about'>
            <div className = {style.uno}>
                <div className = {style.tittle}>
                    <span >Sobre nosotros</span>
                </div>
                <div className = {style.text}>
                    <span>Nos dedicamos a brindar soluciones tecnológicas innovadoras para el sector comercial. Con un enfoque centrado en la simplicidad y la eficiencia, hemos establecido nuestro compromiso de ayudar a los pequeños comercios a prosperar en un entorno empresarial cada vez más competitivo.</span>
                </div>
            </div>
            <div className = {style.dos}>
                <img className={style.img} src={img1} alt=" img not found"/>
            </div>
        </div>
        </div>
    )
}

export default About