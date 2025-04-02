import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./login.module.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.admin);
  console.log("USER", adminLogin);

  const initialValues = {
    user: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string().required("El nombre de usuario es requerido"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  });

  const handleSubmit = async (input, { setSubmitting, setStatus }) => {
    try {
      const response = await dispatch(login(input)).unwrap();
      console.log(response, "response");
      navigate("/main");
    } catch (error) {
      setStatus(error?.response?.data?.msg || "Error desconocido");
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={style.contenedor}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { values, handleChange, errors, touched, isSubmitting, status } = formik;
          return (
            <Form className={style.form}>
              <span className={style.title}>Accede a tu cuenta</span>
              <div className={style.completeC}>
                <div className={style.ca}>
                  <label>Usuario:</label>
                  <input
                    type="text"
                    placeholder="User"
                    name="user"
                    value={values.user}
                    onChange={handleChange}
                    className={errors.user && touched.user ? "input-error" : ""}
                  />
                  {errors.user && touched.user && <p className="error">{errors.user}</p>}
                </div>
                <div>
                  <label>Contraseña:</label>
                  <input
                    type="password"
                    placeholder="*******"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={errors.password && touched.password ? "input-error" : ""}
                  />
                  {errors.password && touched.password && <p className="error">{errors.password}</p>}
                </div>
                {status && <p className="error">{status}</p>}
                <div className={style.bttnContenedor}>
                  <button className={style.bttn} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cargando..." : "Entrar"}
                  </button>
                </div>
              </div>
              <Link>Olvidé mi contraseña</Link>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;