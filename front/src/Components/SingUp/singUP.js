import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../Action/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./singUp.module.css";

function SingUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataNewUser = useSelector((state) => state.newUser);
  console.log("USER", dataNewUser);
  
  const initialValues = {
      name: "",
      lastName: "",
      user: "",
      password: "",
      role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    lastName: Yup.string().required("El apellido es requerido"),
    user: Yup.string().required("El nombre de usuario es requerido"),
    password: Yup.string()
                .required("La contraseña es obligatoria")
                .min(6, "La contraseña debe tener al menos 6 caracteres"), // Agregado mínimo de caracteres
    role: Yup.string().required("El rol es requerido"),
  });

  const handleSubmit = (input) => {
      dispatch(createAccount(input))
        .then((response) => {
          console.log(response.payload, "response");
          navigate("/main");
        })
        .catch((error) => {
          alert(error.response?.data || "Error desconocido", "error");
        });
  };

  return (
    <div className={style.contenedor}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { values, handleChange, errors, touched } = formik;
          return (
            <Form className={style.form}>
              <span className={style.title}>Crea tu cuenta</span>
              <div className={style.completeC}>
                <div className={style.nose}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={style.input}
                  />
                  {errors.name && touched.name && <p className="error">{errors.name}</p>}
                </div>
                <div className={style.nose}>
                  <label>Apellido:</label>
                  <input
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    className={style.input}
                  />
                  {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className={style.nose}>
                  <label>Usuario:</label>
                  <input
                    type="text"
                    placeholder="Crea un nombre de usuario"
                    name="user"
                    value={values.user}
                    onChange={handleChange}
                    className={style.input}
                  />
                  {errors.user && touched.user && <p className="error">{errors.user}</p>}
                </div>
                <div className={style.nose}>
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    placeholder="Crea una contraseña"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={style.input}
                  />
                  {errors.password && touched.password && <p className="error">{errors.password}</p>}
                </div>
                <div className={style.nose}>
                  <label>Rol:</label>
                  <select
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    className={style.input}
                  >
                    <option value="">-</option>
                    <option value="superAdmin">Super Admin</option>
                    <option value="admin">Admin</option>
                    <option value="employer">Employer</option>
                  </select>
                  {errors.role && touched.role && <p className="error">{errors.role}</p>}
                </div>
              </div>
              <div className={style.bttnContenedor}>
                <button className={style.bttn} type="submit">Crear</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SingUp;