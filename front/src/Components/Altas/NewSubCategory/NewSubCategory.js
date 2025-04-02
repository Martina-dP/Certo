import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubCategory, getCategories } from "../../../Action/index";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./subCategory.module.css";

function NewSubCategory({ closeModalSubategory }) {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCategories());
}, [dispatch]);

const categoryList = useSelector((state) => state.categories);

  // Valores iniciales del formulario
const initialValues = {
    sub_category_name: "",
    categoryId: "",
};

  // Esquema de validación
const validationSchema = Yup.object().shape({
    sub_category_name: Yup.string().required("El nombre de la subcategoría es requerido"),
    categoryId: Yup.string().required("Debe seleccionar una categoría"),
});

  // Manejo del envío del formulario
const handleSubmit = (input, { resetForm }) => {
    dispatch(loadSubCategory(input))
    .then(() => {
        alert("Subcategoría creada exitosamente");
        setTimeout(() => closeModalSubategory(false), 2000);
        resetForm();
    })
    .catch((error) => {
        const errorMessage =
        error.response?.data?.message || "Ocurrió un error inesperado";
        alert(errorMessage);
        console.error("Error al crear la subcategoría:", error);
    });
};

    return (
        <div className={style.backgroundModal}>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                <Form className={style.contenedorModal}>
                    <div className={style.contenedorBttnClose}>
                        <button
                        type="button"
                        className={style.bttnClose}
                        onClick={() => closeModalSubategory(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Nueva Subcategoría</span>
                    </div>
                    <div className={style.bodyM}>
                    {/* Selección de categoría */}
                        <div className={style.seccionM}>
                            <label htmlFor="categoryId">Categoría</label>
                            <Field
                            as="select"
                            name="categoryId"
                            id="categoryId"
                            value={values.categoryId}
                            onChange={handleChange}
                            >
                                <option value="">Seleccione una categoría</option>
                                {categoryList.map((option) => (
                                <option key={option.categoryId} value={option.categoryId}>
                                    {option.category_name}
                                </option>
                                ))}
                            </Field>
                            <ErrorMessage
                                name="categoryId"
                                component="div"
                                className={style.errorMessage}
                            />
                        </div>
                        <div className={style.seccionM}>
                            <label htmlFor="sub_category_name">Nombre de la subcategoría</label>
                            <Field
                                type="text"
                                id="sub_category_name"
                                name="sub_category_name"
                                placeholder="Nombre de la subcategoría"
                            />
                            <ErrorMessage
                                name="sub_category_name"
                                component="div"
                                className={style.errorMessage}
                            />
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button type="submit" className={style.bttn}>
                        Añadir Subcategoría
                        </button>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default NewSubCategory;
