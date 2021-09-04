import React, { useState } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import "../styles/Login.css";
import { url } from "../common/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true

const Login = (props) => {

  const [state, setState] = useState({
    email: "",
    password: "",
    loggedStatus: false,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validator = () =>{
    document.getElementById("emailValidate").innerHTML = "";
    document.getElementById("passwordValidate").innerHTML = "";
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.email.length === 0){
      validator()
      document.getElementById("emailValidate").innerHTML = "Email Field is Empty *";
    }
    else if (state.password.length === 0) {
      validator()
      document.getElementById("passwordValidate").innerHTML = "Password Field is Empty *";
    }
    else {
      validator()
      axios
        .post(url + "/login", {
          email: state.email,
          password: state.password,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("loggedStatus", "true");
            props.history.push("/shop");
            toast.success("Login Successful !");
          }
        })
        .catch((err) => {
          toast.error("Invalid username or password");
          console.log(err);
        });
    }
  };
  return (
    <div>
      <ToastContainer />
      <form className="container">
        <h1 className="text-center">Login</h1>
        <div className="form-group">
          <div className="text validate" id="emailValidate"></div>
          <br/>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <input
              className="form-control"
              value={state.email}
              onChange={handleChange}
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="text validate" id="passwordValidate"></div>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon">
                <i className="fas fa-key"></i>
              </span>
            </div>
            <input
              id="password"
              type="password"
              value={state.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmitClick}
            className="btn justify-content-center grad-color btn-lg"
          >
            Login
          </button>
          <br/>
          <br/>
          <Link to="/changepassword">
            <a class="w3-button w3-block w3-section w3-red w3-ripple w3-padding myFont  w3-text-black">
              Forgot Password
            </a>
          </Link>
          <h4 className="forgot-password text-right">
            Dont have an account?{" "}
            <a className="link" href="/register">
              register
            </a>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
