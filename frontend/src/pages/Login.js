import React, { useState , useEffect } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import "../styles/Login.css";
import { url } from "../common/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    if (email.length === 0) {
      validator();
      document.getElementById("emailValidate").innerHTML =
        "Email Field is Empty *";
    } else if (password.length === 0) {
      validator();
      document.getElementById("passwordValidate").innerHTML =
        "Password Field is Empty *";
    }else {
        validator()
        // send the email and password to the server
    const response = await axios
      .post(url + "/login", user)
      .then((response) => {
        if (response.status === 200) {
          // set the state of the 
          console.log(response.data.data)
          setUser(response.data);
          // store the user in localStorage
          localStorage.setItem("user", JSON.stringify(response.data.data));
          localStorage.setItem("id", JSON.stringify(response.data.data.roleid));
          localStorage.setItem("firstname", JSON.stringify(response.data.data.first_name));
          localStorage.setItem("lastname", JSON.stringify(response.data.data.last_name));
          localStorage.setItem("phone", JSON.stringify(response.data.data.phone));
          localStorage.setItem("email", JSON.stringify(response.data.data.email));
          if (response.data.data.roleid == 1) props.history.push("/add_product");
          else if (response.data.data.roleid == 2) props.history.push("/shop");
          toast("Welcome " + response.data.data.first_name +" "+ response.data.data.last_name);
        }
      })
      .catch((err) => {
        toast.error("Invalid username or password");
        console.log(err);
      });
    }
  };

  const validator = () =>{
    document.getElementById("emailValidate").innerHTML = "";
    document.getElementById("passwordValidate").innerHTML = "";
  }

  return (
    <div className="login">
      <ToastContainer />
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="text-center text-form">Login</h1>
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
              value={email}
              onChange={({ target }) => setEmail(target.value)}
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
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="btn justify-content-center grad-color btn-lg"
          >
            Login
          </button>
          <br/>
          <br/>
          {/* <Link to="/changepassword">
            <a class="w3-button w3-block w3-section w3-red w3-ripple w3-padding myFont  w3-text-black">
              Forgot Password
            </a>
          </Link> */}
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
