import "../styles/Login.css";
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from './../common/constants';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory()

    const ChangePassword = () =>{
        if(email.length === 0)
            alert('Email Field is Empty')
        else if(password.length === 0)
            alert('Password Field is Empty')
        else if(confirmPassword.length === 0)
            alert('Password Field is Empty')
        else {
            if(password === confirmPassword){
                const data = new FormData()
                data.append('password', password)
                data.append('email', email)
                axios.put(url+'/user/changePassword',data).then((response) => {
                    const result = response.data
                    if(result.status ==='success')
                        history.push('/login')
                    else{
                        console.log(result.error)
                        alert('Some Error Occured During Changing the Password ')
                    }
                })
            }else
                alert('Password Mismatch')
        }
    }
    
    return (
      <div>
        <div class="w3-container w3-center w3-light-grey">
          <h1>Forgot Password?</h1>

          <div class="w3-panel">
            <p>
              <br />
              <i class="w3-serif w3-xlarge">
                {" "}
                You can reset your password using this...
              </i>
            </p>
          </div>

          <div class="w3-container w3-card-4 w3-text-black w3-margin">
            <div className="w3-row w3-section">
              <div className="w3-col width">
                <i class="w3-xxlarge fa fa-user"></i>
              </div>
              <div className="w3-rest">
                <input
                  class="w3-input w3-border"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type="email"
                  placeholder="Enter Existing Email"
                />
              </div>
            </div>

            <div className="w3-row w3-section">
              <div className="w3-col width">
                <i class="w3-xxlarge fa fa-key"></i>
              </div>
              <div className="w3-rest">
                <input
                  class="w3-input w3-border"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>
            </div>

            <div className="w3-row w3-section">
              <div className="w3-col width">
                <i class="w3-xxlarge fa fa-key"></i>
              </div>
              <div className="w3-rest">
                <input
                  class="w3-input w3-border"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" onClick={ChangePassword} className="btn grad-color btn-lg btn-block">
              Change Password
              </button>

              <button
                type="submit"
                onClick={ChangePassword}
                class="w3-button w3-block w3-section w3-2021-french-blue myFont w3-ripple w3-padding "
              >
                Change Password
              </button>
              <Link to="/login">
                <a class="w3-button w3-block w3-section w3-red w3-ripple myFont w3-padding ">
                  Cancel
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
} 

export default ForgotPassword;