
import { React } from "react";
import {Link} from "react-router-dom"
import './login.css';

const Login = () => {
  return (
    <div
    className="background-image"
    style={{ backgroundImage:  `url(../assets/bgmain.jpg)` }}
  >
    <div className="container d-flex justify-content-center align-items-center">
      <div className="glass-effect p-4">
        <h1 className="text-center mb-4">Login</h1>
        <form>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="text-center pt-2">
            <p>Don't have an account?<span><Link to = "/signup">Sign Up</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login






