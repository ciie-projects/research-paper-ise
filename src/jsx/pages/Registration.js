// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import { connect, useDispatch } from "react-redux";

// import { useHistory } from "react-router-dom";
// import axios from "axios";
// //import cors from 'cors';
// //import logo from '../../images/logo-full.png'
// import { useUserAuth } from "../../userAuthContext";

// function Register(props) {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const { signUp }=UseuserAuth();
//   let errorsObj = { email: "", password: "" };
//   const [errors, setErrors] = useState(errorsObj);
//   const [password, setPassword] = useState("");

//   const handleSubmit=async(e)=>{
//     setErrors("");
//     e.preventDefault();
//     try{
//       await signUp(email,password);
//     }
//     catch(err){
//      setErrors(err.message);
//     }

//   }

//   return (
//     <div className="authincation h-100 p-meddle">
//       <div className="container h-100">
//         <div className="row justify-content-center h-100 align-items-center">
//           <div className="col-md-6">
//             <div className="authincation-content">
//               <div className="row no-gutters">
//                 <div className="col-xl-12">
//                   <div className="auth-form">
//                     <h4 className="text-center mb-4 ">Sign up your account</h4>
//                     {props.errorMessage && (
//                       <div className="bg-red-300 text-danger border border-red-900 p-1 my-2">
//                         {props.errorMessage}
//                       </div>
//                     )}
//                     {props.successMessage && (
//                       <div className="bg-green-300 text-danger text-green-900  p-1 my-2">
//                         {props.successMessage}
//                       </div>
//                     )}
//                     <form method="POST" onSubmit={handleSubmit}>

//                       <div className="form-group">
//                         <label className="mb-1 ">
//                           <strong>Email</strong>
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {errors.email && (
//                           <div className="text-danger fs-12">
//                             {errors.email}
//                           </div>
//                         )}
//                       </div>

//                       <div className="form-group">
//                         <label className="mb-1 ">
//                           <strong>Password</strong>
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                         />
//                       </div>
//                       {errors.password && (
//                         <div className="text-danger fs-12">
//                           {errors.password}
//                         </div>
//                       )}
//                       <div className="text-center mt-4">
//                       <input type="submit" className="btn btn-primary btn-block" />
//                       </div>
//                     </form>
//                     <div className="new-account mt-3 ">
//                       <p>
//                         Already have an account?{" "}
//                         <Link className="text-primary" to="/login">
//                           Sign ins
//                         </Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../userAuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  // let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      // navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Register;
