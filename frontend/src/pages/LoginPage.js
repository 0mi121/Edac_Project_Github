import React from "react";
import axios from "axios";
import { PropTypes } from 'react'
// axios.defaults.withCredentials = true
const backEndUrl = "http://localhost:8080";
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          logged : false
        };
        console.log(this.props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
          });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
          });
    }
    
    async onSubmit(e) {
        // VERY VERY IMPORTANT DON'T YOU DARE EVER REMOVE THIS OR IT FUCKS UP THE WHOLE AUTHENTICATION ON THE FRONT-END
        e.preventDefault();
        // alert(this.state.username + " " + this.state.password);
        try {
            let res = await axios.post(backEndUrl + "/login", {
                email: this.state.email,
                password: this.state.password,
            });
            alert("Welcome, " + res.data.email);
            localStorage.setItem("user", res.data.email);
            localStorage.setItem("logged", "true");
            localStorage.setItem("role", res.data.authorities[0].authority.replace("ROLE_", ""));
            window.location.href="/home";
            // let stateUsername = this.state.username;
            // this.props.history.push("/mata");
        } catch (err) {
            if (err.status == 401) {
                alert(err.response.data.message)
                window.location.reload();
            }
        } finally {
            //alert("stop");
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input value={this.state.email} onChange={this.onChangeEmail} id="username" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChangePassword} id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}