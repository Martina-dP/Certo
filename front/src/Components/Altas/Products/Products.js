import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getSubCategories } from "../../../Action/index"
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./product.module.css"

function Product({closeModalProduct}) {

const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
const [selectedOptionSubCategory, setSelectedOptionSubCategory] = useState('');

const navigate = useNavigate();
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getCategories()); 
    dispatch(getSubCategories());
    },[dispatch])

const categoryList = useSelector((state) => state.categories)
const subCategoryList = useSelector((state) => state.subCategories)

const initialValues = ({
    productId: "",
    color: "",
    size: "",
    profit_margin: "",
    final_price: "",
    categoryId: "",
    subcategoryId: "",
    min_stock: ""
})

const validationSchema = Yup.object().shape({
    user: Yup.string().required("El nombre de usuario es requerido"),
});

const handleSelectChange = (event) => {
    setSelectedOptionCategory(event.target.value);
    setSelectedOptionSubCategory(event.target.value);
    console.log(selectedOptionCategory, "selectedOptionCategory")
console.log(selectedOptionSubCategory, "selectedOptionSubCategory")
};


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
    <div className={style.backgroundModel}>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {(formik) => {
            const { values, handleChange, errors, touched } = formik;
            return (
                <Form className={style.contenedorModel}>
                    <div className={style.contenedorBttnClose}>
                        <button className={style.bttnClose} onClick={() => closeModalProduct(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Alta producto</span>
                    </div>
                    <div className={style.bodyM}>
                        <div className={style.seccionM}>
                            <label> Codigo </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className={style.seccionM}>
                            <label> Nombre del producto </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Minimo stock </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "min_stock"
                                value={values.min_stock}
                                onChange={handleChange}
                            />
                        </div>
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
                            <label> Costo </label>
                            <input
                                type = "text"
                                placeholder= "porcentaje de ganancia"
                                name = "profit_margin"
                                value={values.profit_margin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Sub categoria </label>
                            <select value={selectedOptionSubCategory} onChange={handleSelectChange}>
                                <option value="">Select an option</option>
                                {subCategoryList.map((optionSB) => (
                                    <option key={optionSB.subcategoryId} value={optionSB.subcategoryId}>{optionSB.sub_categoty_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={style.seccionM}>
                            <label> % Utilidad </label>
                            <input
                                type = "text"
                                placeholder= "porcentaje de ganancia"
                                name = "profit_margin"
                                value={values.profit_margin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Color </label>
                            <input
                                type = "text"
                                placeholder="Color"
                                name = "color"
                                value={values.color}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Precio final </label>
                            <input
                                type = "text"
                                placeholder="Total"
                                name = "final_price"
                                value={values.final_price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label> Talla </label>
                            <input
                                type = "text"
                                placeholder="Talla"
                                name = "size"
                                value={values.size}
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

export default Product;