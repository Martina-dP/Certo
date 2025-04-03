import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loadCategory } from "../../../Action/index";
import style from "./category.module.css";

function Category({ closeModal }) {
const dispatch = useDispatch();

const initialValues = {
    category_name: "",
};

const validationSchema = Yup.object().shape({
    category_name: Yup.string().required("El nombre de la categoría es requerido"),
});

const handleSubmit = (input) => {
    dispatch(loadCategory(input))
    .then(() => {
        alert("Categoría creada exitosamente");
        setTimeout(() => closeModal(false), 2000);
    })
    .catch((error) => {
        const errorMessage =
        error.response?.data?.message || "Ocurrió un error inesperado";
        alert(errorMessage);
        console.error("Error al crear la categoría:", error);
    });
};

    return (
        <div className={style.backgroundModal}>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
            {(formik) => {
                const { values, handleChange, errors, touched } = formik;
                return (
                <Form className={style.contenedorModal}>
                    <div className={style.contenedorBttnClose}>
                    <button
                        type="button"
                        className={style.bttnClose}
                        onClick={() => closeModal(false)}
                    >
                        X
                    </button>
                    </div>
                    <div className={style.titulo}>
                    <span>Nueva Categoría</span>
                    </div>
                    <div className={style.bodyM}>
                    <div className={style.seccionM}>
                        <label htmlFor="category_name">Nombre de la categoría</label>
                        <input
                        id="category_name"
                        type="text"
                        placeholder="Nombre de la categoría"
                        name="category_name"
                        value={values.category_name}
                        onChange={handleChange}
                        />
                        <ErrorMessage
                        name="category_name"
                        component="div"
                        className={style.errorMessage}
                        />
                    </div>
                    </div>
                    <div className={style.footer}>
                    <button type="submit" className={style.bttn}>
                        Añadir Categoría
                    </button>
                    </div>
                </Form>
                );
            }}
            </Formik>
        </div>
    );
}

export default Category;
