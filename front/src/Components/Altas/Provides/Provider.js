import React from "react";
import { useDispatch } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loadProvider } from "../../../Action/index";
import style from "./provider.module.css";

function Provider({ closeModal }) {
const dispatch = useDispatch();

const initialValues = {
    organization: "",
    description: "",
    CUIT: "",
    address: "",
    state: "",
    phone: "",
    email: "",
};

const validationSchema = Yup.object().shape({
    organization: Yup.string().required("El nombre de la organización es requerido"),
    description: Yup.string().required("La descripción es requerida"),
    CUIT: Yup.string()
    .required("El CUIT es requerido")
    .matches(/^\d{11}$/, "El CUIT debe tener 11 dígitos"),
    address: Yup.string().required("La dirección es requerida"),
    state: Yup.string().required("La localidad es requerida"),
    phone: Yup.string()
    .required("El teléfono es requerido")
    .matches(/^\d+$/, "El teléfono debe contener solo números"),
    email: Yup.string()
    .required("El correo electrónico es requerido")
    .email("El correo electrónico no es válido"),
});

const handleSubmit = (values, { resetForm }) => {
    dispatch(loadProvider(values))
    .then(() => {
        alert("Proveedor creado exitosamente");
        resetForm();
        closeModal(false);
    })
    .catch((error) => {
        console.error("Error al crear el proveedor:", error);
        alert(error.response?.data?.message || "Ocurrió un error inesperado");
    });
};

    return (
        <div className={style.backgroundModal}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange }) => (
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
                <span>Alta Proveedor</span>
                </div>
                <div className={style.bodyM}>
                <div className={style.seccionM}>
                    <label>Organización</label>
                    <Field
                    type="text"
                    name="organization"
                    placeholder="Nombre de la organización"
                    />
                    <ErrorMessage name="organization" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Descripción</label>
                    <Field
                    type="text"
                    name="description"
                    placeholder="Descripción"
                    />
                    <ErrorMessage name="description" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>CUIT</label>
                    <Field
                    type="text"
                    name="CUIT"
                    placeholder="CUIT (11 dígitos)"
                    />
                    <ErrorMessage name="CUIT" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Dirección</label>
                    <Field
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    />
                    <ErrorMessage name="address" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Localidad</label>
                    <Field
                    type="text"
                    name="state"
                    placeholder="Localidad"
                    />
                    <ErrorMessage name="state" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Teléfono</label>
                    <Field
                    type="text"
                    name="phone"
                    placeholder="Teléfono (solo números)"
                    />
                    <ErrorMessage name="phone" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Correo Electrónico</label>
                    <Field
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    />
                    <ErrorMessage name="email" component="div" className={style.errorMessage} />
                </div>
                </div>
                <div className={style.footer}>
                <button type="submit" className={style.bttn}>
                    Dar de Alta
                </button>
                </div>
            </Form>
            )}
        </Formik>
        </div>
    );
}

export default Provider;