import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../../Action/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./singUp.module.css"

function SingUp() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [showPass, setShowPass] = useState(false)

  const dataNewUser = useSelector((state) => state.newUser);
  console.log("USER", dataNewUser)
  
  const initialValues = ({
      name: "",
      lastName: "",
      user: "",
      password: "",
      role: "",
  })

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre de usuario es requerido"),
    user: Yup.string().required("El usuario de usuario es requerido"),
    lastName: Yup.string().required("El apellido de usuario es requerido"),
    password: Yup.string()
    .required("La contraseña es obligatoria"),
    role: Yup.string().required("El apellido de usuario es requerido"),
  });

  const handleSubmit = (input) => {
      dispatch(createAccount(input)).then((response) => {
        console.log(response.payload, "response")    
        navigate("/");      
      })
        .catch((error) => {
          alert(error.response, "error")    
        });
  };

  return(
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
              <Form  className={style.form}>
              <span className={style.title}> Anywhere in your create Account! </span>
                <div> 
                  <div className={style.nose}>
                    <label> Name : </label>
                    <input
                      type = "text"
                      placeholder="Nmae"
                      name = "name"
                      value={values.name}
                      onChange={handleChange}
                      className={style.input}
                    />
                    <div className={style.errorText}>
                      {errors.name && touched.name && <p className="error">{errors.name}</p>}
                    </div>
                  </div>
                  <div className={style.nose}>
                    <label> Last Name : </label>
                    <input
                      type = "text"
                      placeholder="lastName"
                      name = "lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      className={style.input}
                    />
                    <div className={style.errorText}>
                      {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className={style.nose}>
                    <label> User : </label>
                    <input
                      type = "text"
                      placeholder="Creee un nombre  de usuario"
                      name = "user"
                      value={values.user}
                      onChange={handleChange}
                      className={style.input}
                    />
                    <div className={style.errorText}>
                      {errors.user && touched.user && <p className="error">{errors.user}</p>}
                    </div>
                  </div>
                  <div className={style.nose}>
                    <label> Contraseña : </label>
                    <input
                      type = {"text"}
                      placeholder="Cree una contraseña"
                      name = "password"
                      value={values.password}
                      onChange={handleChange}
                      className={style.input}
                    />
                    <div className={style.errorText}>
                      {errors.password && touched.password && <p className="error">{errors.password}</p>}
                    </div>
                    {/* <div onClick={() => setShowPass(!showPass)}>
                        {showPass ? <AiOutlineEyeInvisible /> : <BiShowAlt  /> }
                    </div> */}
                  </div>
                  <div className={style.nose}>
                    <label> Rol : </label>
                    <select name="role" value={values.role} onChange = {handleChange} >
                      <option value=""> - </option>
                      <option value="superAdmin"> Super admin </option>
                      <option value="admin"> Admin </option>
                      <option value="employer"> Employer </option>
                    </select>
                  </div>
                </div>
                <div className={style.bttnContenedor}>
                  <button className={style.bttn} type="submit"> Entrar </button>
                </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  )} 

export default SingUp;