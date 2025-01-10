import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./login.module.css";
// import { BiShowAlt } from 'react-icons/bi';
// import { AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminLogin = useSelector((state) => state.admin);
  console.log("USER", adminLogin);

  const initialValues = ({
      user: "",
      password: "",
  });

  const validationSchema = Yup.object().shape({
      user: Yup.string().required("El nombre de usuario es requerido"),
      password: Yup.string()
                  .required("La contraseña es obligatoria")
                  .min(6, "La contraseña debe tener al menos 6 caracteres"), // Agregado mínimo de caracteres
  });

  const handleSubmit = (input) => {
      dispatch(login(input))
        .then((response) => {
          console.log(response.payload, "response");
          navigate("/main");
        })
        .catch((error) => {
          alert(error.response.data.msg, "error");
          console.log(error.response.data, "response");
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
              <span className={style.title}>Accede a tu cuenta</span>
              <div className={style.completeC}>
                <div>
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
                  {/* <div onClick={() => setShowPass(!showPass)}>
                      {showPass ? <AiOutlineEyeInvisible /> : <BiShowAlt  /> }
                  </div> */}
                </div>
                <div className={style.bttnContenedor}>
                  <button className={style.bttn} type="submit">Entrar</button>
                </div>
              </div>
              <span>Olvidé mi contraseña</span>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
} 

export default Login;