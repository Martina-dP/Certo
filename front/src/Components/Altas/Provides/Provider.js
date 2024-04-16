import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";

function Provider() {

const navigate = useNavigate();
const dispatch = useDispatch();

const initialValues = ({
    user: "",
    password: "",
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
    <div>
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {(formik) => {
            const { values, handleChange, errors, touched } = formik;
            return (
                <Form>
                    <div>
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
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Sub categoria </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label> Minimo stock </label>
                            <input
                                type = "text"
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
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
                                placeholder="Codigo"
                                name = "productId"
                                value={values.productId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default Provider;