import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubCategory, getCategories } from "../../../Action/index";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./subCategory.module.css";

function NewSubCategory({ closeModal }) {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCategories());
}, [dispatch]);

const categoryList = useSelector((state) => state.categories);


const initialValues = {
    sub_category_name: "",
    categoryId: "",
};

const validationSchema = Yup.object().shape({
    sub_category_name: Yup.string().required("El nombre de la subcategoría es requerido"),
    categoryId: Yup.string().required("Debe seleccionar una categoría"),
});

const handleSubmit = (input, { resetForm }) => {
    dispatch(loadSubCategory(input))
    .then(() => {
        alert("Subcategoría creada exitosamente");
        setTimeout(() => closeModal(false), 2000);
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
        <div className={style.container_subcategory}>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                <Form>
                    <div  className={style.container_cleseModal_subcategory}>
                        <button
                        type="button"
                        className={style.cleseModal_subcategory}
                        onClick={() => closeModal(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className={style.title_subcategory}>
                        <span>Nueva Subcategoría</span>
                    </div>
                    <div className={style.form_subcategory}>
                        <div className={style.subcategory}>
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
                        <div className={style.subcategory}>
                            <label htmlFor="sub_category_name">Nombre de la subcategoría</label>
                            <Field
                                type="text"
                                id="sub_category_name"
                                name="sub_category_name"
                                placeholder="Nombre de la subcategoría"
                                className={style.input_subcategory}
                            />
                            <ErrorMessage
                                name="sub_category_name"
                                component="div"
                                className={style.errorMessage}
                            />
                        </div>
                    </div>
                    <div className={style.footer_subcategory}>
                        <button type="submit" className={style.bttn_footer_subcategory}>
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
