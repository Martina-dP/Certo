import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSubCategory, getCategories } from "../../../Action/index"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./subCategory.module.css"

function NewSubCategory({closeModalSubategory}) {

    const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(getCategories()); 
        },[dispatch])
    
    const categoryList = useSelector((state) => state.categories)
    
    const initialValues = ({
        sub_categoty_name: "",
        categoryId: selectedOptionCategory
    })
    
    const validationSchema = Yup.object().shape({
        sub_categoty_name: Yup.string().required("El nombre de usuario es requerido"),
    });
    
    const handleSelectChange = (event) => {
        setSelectedOptionCategory(event.target.value);
    };

const handleSubmit = (input) => {
    dispatch(loadSubCategory(input)).then((response) => { 
        alert("Sub categoria creada")    
        setTimeout(closeModalSubategory(false)  , 2000);   
    })
    .catch((error) => {
        alert(error.response, "error")    
        console.log(error, "response")  
    });
};

console.log(selectedOptionCategory)
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
            console.log(values, "values")
            return (
                <Form className={style.contenedorModal}>
                    <div className={style.contenedorBttnClose}>
                        <button className={style.bttnClose} onClick={() => closeModalSubategory(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Nueva sub categoria</span>
                    </div>
                    <div className={style.bodyM}>
                    <div className={style.seccionM}>
                            <label> Categoria </label>
                            <select value={selectedOptionCategory} onChange={handleSelectChange}>
                                <option value="">Select an option</option>
                                    {categoryList.map((option) => (
                                <option key={option.categoryId} value={option.categoryId}>{option.categoty_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={style.seccionM}>
                            <label> Nombre de la sub categoria   </label>
                            <input
                                type = "text"
                                placeholder= "sub_categoty_name"
                                name = "sub_categoty_name"
                                value={values.sub_categoty_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button type="submit" className={style.bttn}>Añadir sub categoria</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default NewSubCategory;