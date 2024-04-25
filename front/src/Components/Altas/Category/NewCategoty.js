import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { loadCategory } from "../../../Action/index";
import * as Yup from "yup";
import style from "./category.module.css"

function Category({closeModalCategory}) {

const navigate = useNavigate();
const dispatch = useDispatch();

const initialValues = ({
    categoty_name: "" ,
})

const validationSchema = Yup.object().shape({
    categoty_name: Yup.string().required("El nombre de usuario es requerido"),
});

const handleSubmit = (input) => {
    dispatch(loadCategory(input)).then((response) => {
        alert("Categoria creada")    
        setTimeout(closeModalCategory(false)  , 2000);
    })
    .catch((error) => {
        alert(error, "error")    
        console.log(error.response, "response")  
    });
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
                        <button className={style.bttnClose} onClick={() => closeModalCategory(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Nueva categoria</span>
                    </div>
                    <div className={style.bodyM}>
                        <div className={style.seccionM}>
                            <label> Nombre de la categoria   </label>
                            <input
                                type = "text"
                                placeholder= "Nombre de la categoria"
                                name = "categoty_name"
                                value={values.categoty_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button type="submit" className={style.bttn}>Añadir categoria</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default Category;