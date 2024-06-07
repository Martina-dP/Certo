import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./Bills.module.css"

function NewBill ({closeModalBill}) {

    // const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
    
    const initialValues = ({
        sub_categoty_name: "",
        categoryId: ""
    })
    
//     const validationSchema = Yup.object().shape({
//         sub_categoty_name: Yup.string().required("El nombre de usuario es requerido"),
//     });
    
// const handleSubmit = (input) => {
//     dispatch(loadSubCategory(input)).then((response) => { 
//         alert("Sub categoria creada")    
//         setTimeout(closeModalSubategory(false)  , 2000);   
//     })
//     .catch((error) => {
//         alert(error.response, "error")    
//         console.log(error, "response")  
//     });
// };

return(
    <div className={style.background}>
        <Formik
            // enableReinitialize
            initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={handleSubmit}
        >
        {(formik) => {
            const { values, handleChange, errors, touched } = formik;
            console.log(values, "values")
            return (
                <Form className={style.contenedor}>
                    <div className={style.contenedorBttnClose}>
                        <button className={style.bttnClose} onClick={() => closeModalBill(false)}> X </button>
                    </div>
                    <div className={style.titulo}>
                        <span>Nueva factura</span>
                    </div>
                    <div className={style.bodyM}>
                        <div>
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "ID Compra"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.PRIMERO}>
                                <div className={style.seccionM}>
                                    <input
                                        type = "text"
                                        placeholder= "Fecha"
                                        name = "sub_categoty_name"
                                        value={values.sub_categoty_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={style.seccionM}>
                                    <input
                                        type = "text"
                                        placeholder= "Nro Factura"
                                        name = "sub_categoty_name"
                                        value={values.sub_categoty_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "ID Proveedor/Cliente"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.PRIMERO}>
                                <div className={style.seccionM}>
                                    <input
                                        type = "text"
                                        placeholder= "Nombre Proveedor/cliente"
                                        name = "sub_categoty_name"
                                        value={values.sub_categoty_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={style.seccionM}>
                                    <input
                                        type = "text"
                                        placeholder= "CUIT"
                                        name = "sub_categoty_name"
                                        value={values.sub_categoty_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>ACA va tabla de detalle</p>
                        </div>
                        <div> 
                        <div className={style.PRIMERO}> 
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "Importe sin impuesto"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "% IVA"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "% IIBB"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "descuento"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        
                            
                        <div className={style.PRIMERO}> 
                        <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "$ IVA"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            
                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "$IIBB"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                            
                        
                            

                            <div className={style.seccionM}>
                                <input
                                    type = "text"
                                    placeholder= "total"
                                    name = "sub_categoty_name"
                                    value={values.sub_categoty_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Metdodo de pago</p>
                            </div>
                            <div className={style.PRIMERO}>
                                <button type="submit">Tarjeta</button>
                                <button type="submit">Efectivo</button>
                                <button type="submit">Cheque</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button type="submit" className={style.bttn}>Crear factura</button>
                    </div>
                </Form>
            );
        }}
        </Formik>
    </div>
)} 

export default NewBill;