import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./provider.module.css"

function Provider({closeModalProvider}) {

const navigate = useNavigate();
const dispatch = useDispatch();

const initialValues = ({
    organization: "",
    description: "",
    CUIT: "",
    address: "",
    state: "",
    phone: "",
    email: "",
})

const validationSchema = Yup.object().shape({
    user: Yup.string().required("El nombre de usuario es requerido"),
});

const handleSubmit = (input) => {
    // dispatch(login(input)).then((response) => {
    //     console.log(response.payload, "response")    
    //     navigate("/main");      
    // })
    // .catch((error) => {
    //     alert(error.response.data.msg, "error")    
    //     console.log(error.response.data, "response")  
    // });
};

return(
    <div className={style.backgroundModal}>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {(formik) => {
            const { values, handleChange, errors, touched } = formik;
            return (
                <Form className={style.contenedorModal}>
                    <div className={style.contenedorBttnClose}>
                        <button className={style.bttnClose} onClick={() => closeModalProvider(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Alta proveedor</span>
                    </div>
                    <div className={style.bodyM}>
                        <div className={style.seccionM}>
                            <label> Organizacion </label>
                            <input
                                type = "text"
                                placeholder="organization"
                                name = "organization"
                                value={values.organization}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Descripcion </label>
                            <input
                                type = "text"
                                placeholder="description"
                                name = "description"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> CUIT </label>
                            <input
                                type = "text"
                                placeholder="CUIT"
                                name = "CUIT"
                                value={values.CUIT}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Direccion </label>
                            <input
                                type = "text"
                                placeholder="address"
                                name = "address"
                                value={values.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Localidad </label>
                            <input
                                type = "text"
                                placeholder= "state"
                                name = "state"
                                value={values.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Telefono </label>
                            <input
                                type = "text"
                                placeholder="phone"
                                name = "phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Correo </label>
                            <input
                                type = "text"
                                placeholder= "email"
                                name = "email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button className={style.bttn}>dar de alta</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default Provider;