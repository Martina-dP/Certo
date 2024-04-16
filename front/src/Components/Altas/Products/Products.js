import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./product.module.css"

function Product({closeModalProduct}) {

const navigate = useNavigate();
const dispatch = useDispatch();

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
                    <button onClick={() => closeModalProduct(false)}> X </button>
                    <div className={style.titulo}>
                        <span>Alta producto</span>
                    </div>
                    <div className={style.bodyM}>
                        <div>
                            <label> Codigo </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Nombre del producto </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Categoria </label>
                            <input
                                type = "text"
                                placeholder="Category"
                                name = "categoryId"
                                value={values.categoryId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Sub categoria </label>
                            <input
                                type = "text"
                                placeholder="Sub category"
                                name = "subcategoryId"
                                value={values.subcategoryId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Color </label>
                            <input
                                type = "text"
                                placeholder="Color"
                                name = "color"
                                value={values.color}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Talla </label>
                            <input
                                type = "text"
                                placeholder="Talla"
                                name = "size"
                                value={values.size}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Minimo stock </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "min_stock"
                                value={values.min_stock}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Precio primario </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Utilidad </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Codigo </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Precio final </label>
                            <input
                                type = "text"
                                placeholder="Total"
                                name = "final_price"
                                value={values.final_price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button>dar de alta</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default Product;