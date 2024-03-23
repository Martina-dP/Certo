import React from 'react';

import { Formik } from 'formik';
 
 const Login = () => (
   <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ name: '', password: ""}}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } 
         if (!values.password) {
          errors.password = 'Required';
        } 
         return errors;
       }}
       onSubmit={(values,{ setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify("entraste"));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
          <label>Usuario: </label>
           <input
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <label>Password: </label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <hr/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default Login;