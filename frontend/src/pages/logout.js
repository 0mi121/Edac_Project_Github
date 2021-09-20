import React, { useState , useEffect } from "react";
//import { baseUrl } from '../assets/js/helpers';

const baseUrl = "http://localhost:3000/";
const Logout = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    window.location.href='/login'
  };

    return (
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  
};
export default Logout;
