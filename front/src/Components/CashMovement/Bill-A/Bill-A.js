import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./Bills.module.css";

function NewBill({ closeModalBill }) {
    const initialValues = {
        purchaseId: "",
        date: "",
        invoiceNumber: "",
        providerId: "",
        providerName: "",
        cuit: "",
        amountWithoutTax: "",
        ivaPercent: "",
        iibbPercent: "",
        discount: "",
        ivaAmount: "",
        iibbAmount: "",
        total: "",
        paymentMethod: "",
    };

    const validationSchema = Yup.object().shape({
        purchaseId: Yup.string().required("Requerido"),
        date: Yup.string().required("Requerido"),
        invoiceNumber: Yup.string().required("Requerido"),
        providerId: Yup.string().required("Requerido"),
        providerName: Yup.string().required("Requerido"),
        cuit: Yup.string()
            .matches(/^\d{2}-\d{8}-\d{1}$/, "CUIT inválido. Formato: XX-XXXXXXXX-X")
            .required("Requerido"),
        amountWithoutTax: Yup.number()
            .positive("El importe debe ser un número positivo")
            .required("Requerido"),
        ivaPercent: Yup.number().positive("El porcentaje de IVA debe ser positivo").required("Requerido"),
        iibbPercent: Yup.number().positive("El porcentaje de IIBB debe ser positivo").required("Requerido"),
        discount: Yup.number().min(0, "Descuento no puede ser negativo").max(100, "Descuento no puede ser mayor a 100").required("Requerido"),
        ivaAmount: Yup.number().required("Requerido"),
        iibbAmount: Yup.number().required("Requerido"),
        total: Yup.number().required("Requerido"),
        paymentMethod: Yup.string().required("El método de pago es requerido"),
    });

    const handleChange = (e, setFieldValue) => {
        const { name, value } = e.target;
        setFieldValue(name, value);

        // Cálculos automáticos
        if (name === "amountWithoutTax" || name === "ivaPercent" || name === "iibbPercent" || name === "discount") {
            const amountWithoutTax = parseFloat(value) || 0;
            const ivaPercent = parseFloat(setFieldValue.values.ivaPercent) || 21;
            const iibbPercent = parseFloat(setFieldValue.values.iibbPercent) || 3.5;
            const discount = parseFloat(setFieldValue.values.discount) || 0;

            // Calculando IVA, IIBB, y total
            const ivaAmount = amountWithoutTax * (ivaPercent / 100);
            const iibbAmount = amountWithoutTax * (iibbPercent / 100);
            const total = amountWithoutTax + ivaAmount + iibbAmount - (amountWithoutTax * (discount / 100));

            // Actualizando los campos calculados
            setFieldValue("ivaAmount", ivaAmount.toFixed(2));
            setFieldValue("iibbAmount", iibbAmount.toFixed(2));
            setFieldValue("total", total.toFixed(2));
        }
    };

    const handleSubmit = (values) => {
        console.log("Factura creada:", values);
        // Aquí iría dispatch o fetch al backend
        closeModalBill(false);
    };

    return (
        <div className={style.background}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ setFieldValue }) => (
                    <Form className={style.contenedor}>
                        <div className={style.contenedorBttnClose}>
                            <button type="button" className={style.bttnClose} onClick={() => closeModalBill(false)}>X</button>
                        </div>

                        <div className={style.titulo}><span>Nueva factura</span></div>

                        <div className={style.bodyM}>
                            <div className={style.seccionM}>
                                <label htmlFor="purchaseId">ID Compra</label>
                                <Field name="purchaseId" placeholder="ID Compra" id="purchaseId" onChange={e => handleChange(e, setFieldValue)} />
                                <ErrorMessage name="purchaseId" component="div" className={style.error} />
                            </div>

                            <div className={style.PRIMERO}>
                                <div className={style.seccionM}>
                                    <label htmlFor="date">Fecha</label>
                                    <Field name="date" placeholder="Fecha" id="date" onChange={e => handleChange(e, setFieldValue)} />
                                    <ErrorMessage name="date" component="div" className={style.error} />
                                </div>
                                <div className={style.seccionM}>
                                    <label htmlFor="invoiceNumber">Nro Factura</label>
                                    <Field name="invoiceNumber" placeholder="Nro Factura" id="invoiceNumber" onChange={e => handleChange(e, setFieldValue)} />
                                    <ErrorMessage name="invoiceNumber" component="div" className={style.error} />
                                </div>
                            </div>

                            <div className={style.seccionM}>
                                <label htmlFor="providerId">ID Proveedor/Cliente</label>
                                <Field name="providerId" placeholder="ID Proveedor/Cliente" id="providerId" onChange={e => handleChange(e, setFieldValue)} />
                                <ErrorMessage name="providerId" component="div" className={style.error} />
                            </div>

                            <div className={style.PRIMERO}>
                                <div className={style.seccionM}>
                                    <label htmlFor="providerName">Nombre Proveedor/Cliente</label>
                                    <Field name="providerName" placeholder="Nombre Proveedor/Cliente" id="providerName" onChange={e => handleChange(e, setFieldValue)} />
                                    <ErrorMessage name="providerName" component="div" className={style.error} />
                                </div>
                                <div className={style.seccionM}>
                                    <label htmlFor="cuit">CUIT</label>
                                    <Field name="cuit" placeholder="CUIT" id="cuit" onChange={e => handleChange(e, setFieldValue)} />
                                    <ErrorMessage name="cuit" component="div" className={style.error} />
                                </div>
                            </div>

                            <div className={style.PRIMERO}>
                                <label htmlFor="amountWithoutTax">Importe sin impuesto</label>
                                <Field name="amountWithoutTax" placeholder="Importe sin impuesto" className={style.seccionM} onChange={e => handleChange(e, setFieldValue)} />
                                <label htmlFor="ivaPercent">% IVA</label>
                                <Field name="ivaPercent" placeholder="% IVA" className={style.seccionM} onChange={e => handleChange(e, setFieldValue)} />
                                <label htmlFor="iibbPercent">% IIBB</label>
                                <Field name="iibbPercent" placeholder="% IIBB" className={style.seccionM} onChange={e => handleChange(e, setFieldValue)} />
                                <label htmlFor="discount">Descuento</label>
                                <Field name="discount" placeholder="Descuento" className={style.seccionM} onChange={e => handleChange(e, setFieldValue)} />
                            </div>

                            <div className={style.PRIMERO}>
                                <label htmlFor="ivaAmount">$ IVA</label>
                                <Field name="ivaAmount" placeholder="$ IVA" className={style.seccionM} />
                                <label htmlFor="iibbAmount">$ IIBB</label>
                                <Field name="iibbAmount" placeholder="$ IIBB" className={style.seccionM} />
                            </div>

                            <div className={style.seccionM}>
                                <label htmlFor="total">Total</label>
                                <Field name="total" placeholder="Total" id="total" />
                                <ErrorMessage name="total" component="div" className={style.error} />
                            </div>

                            <div className={style.seccionM}>
                                <label>Método de pago:</label>
                                <div className={style.PRIMERO}>
                                    <label><Field type="radio" name="paymentMethod" value="tarjeta" /> Tarjeta</label>
                                    <label><Field type="radio" name="paymentMethod" value="efectivo" /> Efectivo</label>
                                    <label><Field type="radio" name="paymentMethod" value="cheque" /> Cheque</label>
                                </div>
                                <ErrorMessage name="paymentMethod" component="div" className={style.error} />
                            </div>
                        </div>

                        <div className={style.footer}>
                            <button type="submit" className={style.bttn}>Crear factura</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NewBill;