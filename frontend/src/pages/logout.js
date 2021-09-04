import React from "react";
//import { baseUrl } from '../assets/js/helpers';
import { useHistory } from "react-router-dom";

const baseUrl = "http://localhost:3000/";
const Logout = () => {
  const history = useHistory();
  const OnLogout = () => {
    window.localStorage.clear();
    localStorage.setItem("loggedStatus", "false");
    history.push("/");
  };

  return (
    <div>
      <h2>Are you sure want to logout?</h2>
      <button className="grad-color btn-lg" onClick={OnLogout}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
