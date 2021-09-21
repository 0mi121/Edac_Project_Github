import React from 'react'
import "../styles/Profile.css";

const Profile = (props) => {
    const fname = JSON.parse(localStorage.getItem("firstname"));
    const lname = JSON.parse(localStorage.getItem("lastname"));
    const email = JSON.parse(localStorage.getItem("email"));
    const phone = JSON.parse(localStorage.getItem("phone"));
    const role = JSON.parse(localStorage.getItem("id"));
    return (
      <div className="profile">
        <div class="card">
          <img
            className="profile-image"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">
              Email : {email}
              <br />
              <br />
              Name : {fname} {lname}
              <br />
              <br />
              Phone : {phone}
              <br />
              <br />
              Role : {role == 1 ? <>Admin</> : <>User</>}
              <br />
            </h4>
            <div className="d-flex justify-content-center">
            <button type="button" class="btn btn-info btn-lg">
              Update
            </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile
