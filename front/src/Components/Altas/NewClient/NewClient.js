import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./newClient.module.css"

function NewClient({closeModal}) {

const navigate = useNavigate();
const dispatch = useDispatch();

const initialValues = ({
    name: "",
    lastName: "",
    DNI: "",
    taxStatus: "",
    birthday: "",
    authorized_margin: "",
    address: "",
    state: ""
})

const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre de usuario es requerido"),
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
                        <button className={style.bttnClose} onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Alta cliente</span>
                    </div>
                    <div className={style.bodyM}>
                        <div className={style.seccionM}>
                            <label> Nombre </label>
                            <input
                                type = "text"
                                placeholder="Nombre"
                                name = "name"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Apellido </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> DNI </label>
                            <input
                                type = "text"
                                placeholder="DNI"
                                name = "DNI"
                                value={values.DNI}
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
                                placeholder="state"
                                name = "state"
                                value={values.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Fecha de nacimiento </label>
                            <input
                                type = "date"
                                placeholder="birthday"
                                name = "birthday"
                                value={values.birthday}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Situacion fiscal </label>
                            <input
                                type = "text"
                                placeholder="taxStatus"
                                name = "taxStatus"
                                value={values.taxStatus}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Margen autorizado </label>
                            <input
                                type = "text"
                                placeholder="authorized_margin"
                                name = "authorized_margin"
                                value={values.authorized_margin}
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

export default NewClient;