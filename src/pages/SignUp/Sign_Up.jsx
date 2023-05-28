// import { React } from "react";
// import {Link} from "react-router-dom";
// import './Sign_up.css';


// const Sign_Up = () => {
//   return (
//     <div className="background-image">
//       <div className="container d-flex justify-content-center align-items-center">
//         <div className="glass-effect p-4">
//           <h1 className="text-center mb-4">Sign Up</h1>
//           <form>
//             <div className="mb-3">
//               <input  
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <button type="submit" className="btn btn-primary">
//                 Sign Up
//               </button>
//             </div>
//             <div className="text-center pt-2">
//               <p>Already have an account?<span><Link to = "/login">Login</Link></span></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_Up;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Sign_up.css";
// import { signupUserApi } from "../../helper/api-util";

// const Sign_Up = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isFormValid, setIsFormValid] = useState(true);

//   const navigate = useNavigate();

//   const signupBtnPress = async () => {
//     if (
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === "" ||
//       confirmPassword.trim() === ""
//     ) {
//       setIsFormValid(false);
//       return;
//     }

//     setIsFormValid(true);

//     if (password !== confirmPassword) {
//       console.log("Passwords do not match");
//       return;
//     }

//     const res = await signupUserApi({
//       name: name,
//       email: email,
//       password: password,
//     });

//     console.log("RES OBJ ==> ", res);

//     if (res && res.status) {
//       console.log("Signup successful");
//       navigate("/login");
//     } else {
//       console.log("Cannot signup");
//     }
//   };

//   return (
//     <div className="background-image">
//       <div className="container d-flex justify-content-center align-items-center">
//         <div className="glass-effect p-4">
//           <h1 className="text-center mb-4">Sign Up</h1>
//           <form>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 onClick={signupBtnPress}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Sign Up
//               </button>
//             </div>
//             {!isFormValid && (
//               <div className="text-center pt-2">
//                 <p>Please fill in all fields</p>
//               </div>
//             )}
//             <div className="text-center pt-2">
//               <p>
//                 Already have an account?{" "}
//                 <span>
//                   <Link to="/login">Login</Link>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_Up;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_up.css";
import { signupUserApi } from "../../helper/api-util";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();

  const signupBtnPress = async () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const res = await signupUserApi({
      userName: name,
      userEmail: email,
      userPassword: password,
    });

    console.log("RES OBJ ==> ", res);

    if (res && res.status) {
      console.log("Signup successful");
      navigate("/login");
    } else {
      console.log("Cannot signup");
    }
  };

  return (
    <div className="background-image">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="glass-effect p-4">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button
                onClick={signupBtnPress}
                type="button"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
            {!isFormValid && (
              <div className="text-center pt-2">
                <p>Please fill in all fields</p>
              </div>
            )}
            <div className="text-center pt-2">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_Up;
