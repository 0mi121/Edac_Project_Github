import "../styles/Login.css";
import React from "react";
import axios from "axios";
import { url } from './../common/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      retypedpass: "",
      first_name: "",
      last_name: "",
      phone: "",
      roleid: 2,
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRetypePassword = this.onChangeRetypePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    // this.onChangeRoleid = this.onChangeRoleid.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeRetypePassword(e) {
    this.setState({
      retypedpass : e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeRoleid(e) {
    this.setState({
      roleid: e.target.value,
    });
  }

  validator(){
    document.getElementById("emailValidate").innerHTML = "";
      document.getElementById("passwordValidate").innerHTML = "";
      document.getElementById("firstNameValidate").innerHTML = "";
      document.getElementById("LastNameValidate").innerHTML = "";
      document.getElementById("PhoneValidate").innerHTML = "";
      document.getElementById("RetypepasswordValidate").innerHTML = "";
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.email.length === 0) {
      this.validator()
      document.getElementById("emailValidate").innerHTML =
        "Email Field is Empty *";
    } else if (this.state.password.length === 0) {
      this.validator()
      document.getElementById("passwordValidate").innerHTML =
        "Password Field is Empty *";
        
  } else if (this.state.retypedpass !== this.state.password) {
    this.validator()
    document.getElementById("RetypepasswordValidate").innerHTML =
      "Password Doesn't Match....!!!";
      
  }
    else if (this.state.first_name.length === 0) {
      this.validator()
      document.getElementById("firstNameValidate").innerHTML =
        "First Name Field is Empty *";
    } else if (this.state.last_name.length === 0) {
      this.validator()
      document.getElementById("LastNameValidate").innerHTML =
        "Last Name Field is Empty *";
    } else if (this.state.phone.length === 0) {
      this.validator()
      document.getElementById("PhoneValidate").innerHTML =
        "Phone Field is Empty *";
    } else {
      this.validator()
      await axios
        .post(
          url + "/register",
          {
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            roleid: this.state.roleid,
          },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success("Registration successful!");
          //alert("Registration successful " + this.state.first_name);
        })
        .catch((err) => {
          toast.error("Email already exist");
          // alert("email already exist");
        });
    }
  }

  render() {
    return (
      <div className="login d-flex justify-content-center">
        <ToastContainer />
        <form onSubmit={this.onSubmit} className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <h1 className="text-center page-name">Register</h1>
          <br />
          <br />
          <div className="form-group">
            <div className="text-left validate" id="emailValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="text-left validate" id="passwordValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                value={this.state.password}
                onChange={this.onChangePassword}
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="text-left validate" id="RetypepasswordValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                value={this.state.retypedpass}
                onChange={this.onChangeRetypePassword}
                id="RetypePassword"
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
            <div className="text-left validate" id="firstNameValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i class="fas fa-user-tie"></i>
                </span>
              </div>
              <input
                value={this.state.first_name}
                name="first_name"
                onChange={this.onChangeFirstName}
                id="firstName"
                type="text"
                className="form-control"
                placeholder="Enter first name"
              />
            </div>
            <div className="text-left validate" id="LastNameValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i class="fas fa-user-tie"></i>
                </span>
              </div>
              <input
                value={this.state.last_name}
                name="last_name"
                onChange={this.onChangeLastName}
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Enter last name"
              />
            </div>
            <div className="text-left validate" id="PhoneValidate"></div>
            <div className="input-group">
              <div className="input-group-addon">
                <span className="glyphicon">
                  <i class="fas fa-phone-volume"></i>
                </span>
              </div>
              <input
                value={this.state.phone}
                name="phone"
                onChange={this.onChangePhone}
                id="phone"
                type="number"
                className="form-control"
                placeholder="Enter mobile no."
              />
            </div>

            <button
              type="submit"
              className="btn justify-content-center grad-color btn-lg"
            >
              Create account
            </button>
            <h4 className="forgot-password text-right">
              Already have an account?{" "}
              <a className="link" href="/login">
                login
              </a>
            </h4>
          </div>
        </form>
      </div>
    );
  }
}