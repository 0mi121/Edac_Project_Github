import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { axios } from 'axios';
import { url } from './../common/constants';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom';

const Address = () => {
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [addr, setAddr] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState(0);

    const history = useHistory();

    const validator = () => {
        document.getElementById("country").innerHTML = "";
        document.getElementById("state").innerHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("addr").innerHTML = "";
        document.getElementById("landmark").innerHTML = "";
        document.getElementById("pincode").innerHTML = "";
      };

      const addAddress = (e) => {
        e.preventDefault();
        if (country.length === 0) {
          validator();
          document.getElementById("country").innerHTML = "  Field is Empty *";
        } else if (state.length === 0) {
          validator();
          document.getElementById("state").innerHTML = "  Field is Empty *";
        } else if (city.length === 0) {
            validator();
            document.getElementById("city").innerHTML = "  Field is Empty *";
        } else if (addr.length === 0) {
            validator();
            document.getElementById("addr").innerHTML = "  Field is Empty *";
        } else if (landmark.length === 0) {
            validator();
            document.getElementById("landmark").innerHTML = "  Field is Empty *";
        } else if (pincode.length === 0) {
            validator();
            document.getElementById("pincode").innerHTML = "  Field is Empty *";
        } else {
            validator();
            const data = new FormData();
      
            // add the data
            data.append("country", country);
            data.append("state", state);
            data.append("city", city);
            data.append("addr", addr);
            data.append("landmark", landmark);
            data.append("pincode", pincode);
      
            // send the data to the API
            axios
              .post(url + "/address", data)
              .then((response) => {
                const result = response.data;
                if (result.status === "success") {
                  toast.success("successfully added address!");
                  // go to the list of artists
                  history.push("/order");
                } else {
                }
              })
              .catch((err) => {
                toast.error("error while adding product");
                console.log(err);
              });
          }
      }

    return (
      <div className="container">
        <ToastContainer />
        <h1 className="page-title page-name">Shipping Address</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="">Country</label>
            &nbsp;&nbsp;
            <span className="text validate" id="country"></span>
            <input
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              placeholder="Enter Country Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">State</label>
            &nbsp;&nbsp;
            <span className="text validate" id="state"></span>
            <input
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder="Enter State Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">City</label>
            &nbsp;&nbsp;
            <span className="text validate" id="city"></span>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="Enter City Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Address</label>
            <span className="text validate" id="addr"></span>
            <textarea
              rows="3"
              onChange={(e) => {
                setAddr(e.target.value);
              }}
              placeholder="Enter Address"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="">Landmark</label>
            &nbsp;&nbsp;
            <span className="text validate" id="landmark"></span>
            <input
              onChange={(e) => {
                setLandmark(e.target.value);
              }}
              placeholder="Enter Landmark Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">Pincode</label>
            <span className="text validate" id="pincode"></span>
            <input
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              placeholder="Enter pincode"
              type="number"
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
          <Link to="/success">
              <a className="btn btn-warning">Add</a>
            </Link>
            {/* <button onClick={addAddress} className="btn btn-success">
              Add
            </button> */}

            <Link to="/cart">
              <a className="btn btn-warning">Back</a>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default Address
