import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { url } from './../common/constants';
import { axios } from 'axios';
import { useHistory } from 'react-router-dom';

const EditProfile = (props) => {

    const history = useHistory();

    const fname = JSON.parse(localStorage.getItem("firstname"));
    const lname = JSON.parse(localStorage.getItem("lastname"));
    const emailid = JSON.parse(localStorage.getItem("email"));
    const phoneno = JSON.parse(localStorage.getItem("phone"));

    const [profile, setProfile] = useState({});
    const [firstname, setFirstname] = useState(fname);
    const [lastname, setLastname] = useState(lname);
    const [email, setEmail] = useState(emailid);
    const [phone, setPhone] = useState(phoneno);

    const updateProfile = (e) => {
      e.preventDefault();
    //   const data = new FormData();

    //   // add the data
    //   data.append("firstname", firstname);
    //   data.append("lastname", lastname);
    //   data.append("email", email);
    //   data.append("phone", phone);
      axios.post(url + "/update/user/",props.id)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            // toast.success("successfully added address!");
            // go to the list of artists
            history.push("/profile");
          } else {
          }
        })
        .catch((err) => {
        //   toast.error("error while adding product");
          console.log(err);
        });
    };

    // useEffect(() => {
    //     const id = JSON.parse(localStorage.getItem("id"));
    //     fetch(url + "/update/user" + props.match.params.id)
    //       .then((res) => res.json())
    //       .then((result) => {
    //         setProfile(result);
    //       });
    //   }, []);
    return (
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="">first name</label>
            &nbsp;&nbsp;
            <span className="text validate" id="firstname"></span>
            <input
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              placeholder="Enter firstname Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">last name</label>
            &nbsp;&nbsp;
            <span className="text validate" id="lastname"></span>
            <input
            value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              placeholder="Enter lastname Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">email</label>
            &nbsp;&nbsp;
            <span className="text validate" id="email"></span>
            <input
            value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Phone</label>
            &nbsp;&nbsp;
            <span className="text validate" id="phone"></span>
            <input
            value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="Enter phone Name"
              type="number"
              className="form-control"
            />
          </div>
          <button onClick={updateProfile} className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    );
}

export default EditProfile
