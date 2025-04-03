import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Bank.module.css"

function Bank({closeModal }) {

const navigate = useNavigate();
const dispatch = useDispatch();

const initialValues = ({
    organization: "",
})

const validationSchema = Yup.object().shape({
    organization: Yup.string().required("El nombre de usuario es requerido"),
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
                        <button className={style.bttnClose} onClick={() => closeModal (false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Nueva categoria</span>
                    </div>
                    <div className={style.bodyM}>
                        <div className={style.seccionM}>
                            <label> Nombre de la categoria   </label>
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
                        <button className={style.bttn}>Añadir banco</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default Bank;