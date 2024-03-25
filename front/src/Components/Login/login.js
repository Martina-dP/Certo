import React from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/index";
import { Form, Formik } from "formik";
import * as Yup from "yup";
// import { BiShowAlt } from 'react-icons/bi';
// import { AiOutlineEyeInvisible } from 'react-icons/ai';
 
function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [showPass, setShowPass] = useState(false)

  const adminLogin = useSelector((state) => state.admin);
  console.log("USER", adminLogin)
  
  const initialValues = ({
      user: "",
      password: "",
  })

  const validationSchema = Yup.object().shape({
      user: Yup.string().required("El nombre de usuario es requerido"),
      password: Yup.string()
      .required("La contraseña es obligatoria")
    });

  const handleSubmit = (values) => {
      dispatch(login(values)).then((response) => {
         console.log(response.payload, "response")    
         navigate("/main");      
      })
        .catch((error) => {
          alert(error.response, "error")    
        });
      console.log(values)
  };

  return(
   <div>
     <h1>Anywhere in your app!</h1>
     <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {(formik) => {
            const { values, handleChange, errors, touched } = formik;
            return (
                <Form>
                    <div>
                      <div>
                        <div>
                          <label> User : </label>
                          <input
                            type = "text"
                            placeholder="User"
                            name = "user"
                            value={values.user}
                            onChange={handleChange}
                            className={errors.user && touched.user ? "input-error" : ""}
                          />
                          {errors.user && touched.user && <p className="error">{errors.user}</p>}
                        </div>
                        <div>
                          <label> Contraseña : </label>
                          <input
                            type = {"text"}
                            placeholder="*******"
                            name = "password"
                            value={values.password}
                            onChange={handleChange}
                            className={errors.password && touched.password ? "input-error" : ""}
                          />
                          {errors.password && touched.password && <p className="error">{errors.password}</p>}
                          {/* <div onClick={() => setShowPass(!showPass)}>
                              {showPass ? <AiOutlineEyeInvisible /> : <BiShowAlt  /> }
                          </div> */}
                        </div>
                      </div>
                      <div >
                        <button type="submit"> Entrar </button>
                      </div>
                    </div>
                </Form>
            );
        }}
    </Formik>
   </div>
  )} 

export default Login;