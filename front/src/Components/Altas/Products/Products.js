import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getSubCategories  } from "../../../Action/index";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./product.module.css";

function Product({ closeModalProduct }) {
const [selectedOptionCategory, setSelectedOptionCategory] = useState("");

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());
}, [dispatch]);

const categoryList = useSelector((state) => state.categories);
const subCategoryList = useSelector((state) => state.subCategories);

const initialValues = {
    productId: "",
    productName: "",
    color: "",
    size: "",
    profit_margin: "",
    final_price: "",
    categoryId: "",
    subcategoryId: "",
    min_stock: "",
};

const validationSchema = Yup.object().shape({
    productId: Yup.string().required("El código del producto es requerido"),
    productName: Yup.string().required("El nombre del producto es requerido"),
    color: Yup.string().required("El color es requerido"),
    size: Yup.string().required("La talla es requerida"),
    profit_margin: Yup.number()
    .required("El porcentaje de ganancia es requerido")
    .min(0, "Debe ser mayor o igual a 0"),
    final_price: Yup.number()
    .required("El precio final es requerido")
    .min(0, "Debe ser mayor o igual a 0"),
    categoryId: Yup.string().required("La categoría es requerida"),
    subcategoryId: Yup.string().required("La subcategoría es requerida"),
    min_stock: Yup.number()
    .required("El stock mínimo es requerido")
    .min(0, "Debe ser mayor o igual a 0"),
});

// const handleSubmit = (values, { resetForm }) => {
//     dispatch(createProduct(values))
//     .then(() => {
//         alert("Producto creado exitosamente");
//         resetForm();
//         closeModalProduct(false);
//     })
//     .catch((error) => {
//         console.error("Error al crear el producto:", error);
//         alert(error.response?.data?.message || "Ocurrió un error inesperado");
//     });
// };

const filteredSubCategories = subCategoryList.filter(
    (subCat) => subCat.categoryId === selectedOptionCategory
);

    return (
        <div className={style.backgroundModel}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
        >
            {({ values, handleChange }) => (
            <Form className={style.contenedorModel}>
                <div className={style.contenedorBttnClose}>
                <button
                    type="button"
                    className={style.bttnClose}
                    onClick={() => closeModalProduct(false)}
                >
                    X
                </button>
                </div>
                <div className={style.titulo}>
                <span>Alta Producto</span>
                </div>
                <div className={style.bodyM}>
                <div className={style.seccionM}>
                    <label>Código</label>
                    <Field
                    type="text"
                    name="productId"
                    placeholder="Código del producto"
                    />
                    <ErrorMessage name="productId" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Nombre del producto</label>
                    <Field
                    type="text"
                    name="productName"
                    placeholder="Nombre del producto"
                    />
                    <ErrorMessage name="productName" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Stock mínimo</label>
                    <Field
                    type="number"
                    name="min_stock"
                    placeholder="Stock mínimo"
                    />
                    <ErrorMessage name="min_stock" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Categoría</label>
                    <Field
                    as="select"
                    name="categoryId"
                    onChange={(e) => {
                        handleChange(e);
                        setSelectedOptionCategory(e.target.value);
                    }}
                    >
                    <option value="">Seleccione una categoría</option>
                    {categoryList.map((option) => (
                        <option key={option.categoryId} value={option.categoryId}>
                        {option.category_name}
                        </option>
                    ))}
                    </Field>
                    <ErrorMessage name="categoryId" component="div" className={style.errorMessage} />
                </div>
                <div className={style.seccionM}>
                    <label>Subcategoría</label>
                    <Field as="select" name="subcategoryId">
                    <option value="">Seleccione una subcategoría</option>
                    {filteredSubCategories.map((option) => (
                        <option key={option.subcategoryId} value={option.subcategoryId}>
                        {option.sub_category_name}
                        </option>
                    ))}
                    </Field>
                    <ErrorMessage name="subcategoryId" component="div" className={style.errorMessage} />
                </div>
                {["profit_margin", "final_price", "color", "size"].map((field) => (
                    <div key={field} className={style.seccionM}>
                    <label>{field.replace("_", " ").toUpperCase()}</label>
                    <Field
                        type="text"
                        name={field}
                        placeholder={field.replace("_", " ").toUpperCase()}
                    />
                    <ErrorMessage name={field} component="div" className={style.errorMessage} />
                    </div>
                ))}
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

export default Product;
