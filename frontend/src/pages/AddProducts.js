import axios from "axios";
import "../styles/Login.css";
import "../styles/AddProducts.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [pname, setPname] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0.0);
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0.0);
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState(undefined);
  const [image2, setImage2] = useState(undefined);
  const [image3, setImage3] = useState(undefined);

  // get the history object
  const history = useHistory();

  // gets called when user selects an image
  const onFileSelect1 = (event) => {
    setImage1(event.target.files[0]);
  };

  const onFileSelect2 = (event) => {
    setImage2(event.target.files[0]);
  };

  const onFileSelect3 = (event) => {
    setImage3(event.target.files[0]);
  };

  const validator = () => {
    document.getElementById("pname").innerHTML = "";
    document.getElementById("brand").innerHTML = "";
    document.getElementById("price").innerHTML = "";
    document.getElementById("color").innerHTML = "";
    document.getElementById("dimension").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("rating").innerHTML = "";
    document.getElementById("category").innerHTML = "";
    document.getElementById("image1").innerHTML = "";
    document.getElementById("image2").innerHTML = "";
    document.getElementById("image3").innerHTML = "";
  };

  const addProductToDB = (e) => {
    e.preventDefault();
    if (pname.length === 0) {
      validator();
      document.getElementById("pname").innerHTML = "  Field is Empty *";
    } else if (brand.length === 0) {
      validator();
      document.getElementById("brand").innerHTML = "  Field is Empty *";
    } else if (price.length === 0) {
      validator();
      document.getElementById("price").innerHTML = "  Field is Empty *";
    } else if (color.length === 0) {
      validator();
      document.getElementById("color").innerHTML = "  Field is Empty *";
    } else if (dimension.length === 0) {
      validator();
      document.getElementById("dimension").innerHTML = "  Field is Empty *";
    } else if (description.length === 0) {
      validator();
      document.getElementById("description").innerHTML = "  Field is Empty *";
    } else if (rating.length === 0) {
      validator();
      document.getElementById("rating").innerHTML = "  Field is Empty *";
    } else if (
      document.getElementsByTagName("option").innerHTML === "Select Here"
    ) {
      validator();
      document.getElementById("category").innerHTML = "  Field is Empty *";
    } else if (!image1) {
      validator();
      document.getElementById("image1").innerHTML = "  Field is Empty *";
    } else if (!image2) {
      validator();
      document.getElementById("image2").innerHTML = "  Field is Empty *";
    } else if (!image3) {
      validator();
      document.getElementById("image3").innerHTML = "  Field is Empty *";
    } else {
      validator();
      // when a file needs to be uploaded use FormData
      const data = new FormData();

      // add the data
      data.append("pname", pname);
      data.append("brand", brand);
      data.append("price", price);
      data.append("color", color);
      data.append("dimension", dimension);
      data.append("description", description);
      data.append("rating", rating);
      data.append("category", category);
      data.append("image1", image1);
      data.append("image2", image2);
      data.append("image3", image3);

      // send the data to the API
      axios
        .post(url + "/add_product", data)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            toast.success("successfully added product!");
            // go to the list of artists
            history.push("/shop");
          } else {
          }
        })
        .catch((err) => {
          toast.error("error while adding product");
          console.log(err);
        });
    }
  };

  return (
    <div className="login d-flex justify-content-center">
      <ToastContainer />

      <form className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
      <h1 className="page-title page-name">Add Product</h1>
        <div className="mb-3">
          <label htmlFor="">Product Name</label>
          &nbsp;&nbsp;
          <span className="text validate" id="pname"></span>
          <input
            onChange={(e) => {
              setPname(e.target.value);
            }}
            placeholder="Enter Product Name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Brand Name</label>
          &nbsp;&nbsp;
          <span className="text validate" id="brand"></span>
          <input
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            placeholder="Enter Brand Name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Price</label>
          <span className="text validate" id="price"></span>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Enter Price"
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Color</label>
          <span className="text validate" id="color"></span>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="Enter Color"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Dimension</label>
          <span className="text validate" id="dimension"></span>
          <input
            onChange={(e) => {
              setDimension(e.target.value);
            }}
            placeholder="Enter Dimension"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Description</label>
          <span className="text validate" id="description"></span>
          <textarea
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter Description"
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="">Rating</label>
          <span className="text validate" id="rating"></span>
          <input
            onChange={(e) => {
              setRating(e.target.value);
            }}
            placeholder="Enter rating"
            type="number"
            min="0"
            max="5"
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category">Select Category</label>
          <span className="text validate" id="category"></span>
          <select
            class="form-control"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            id="categoryValidate"
          >
            <option value="" disabled selected>
              Select Here
            </option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="AC">AC</option>
            <option value="Geyser">Geyser</option>
            <option value="Food Processor">Food Processor</option>
            <option value="Burner">Burner</option>
            <option value="Washing Machine">Washing Machine</option>
            <option value="Mixer">Mixer</option>
            <option value="Fan">Fan</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label htmlFor="">Image 1</label>
          <span className="text validate" id="image1"></span>
          <input
            accept="image/*"
            onChange={onFileSelect1}
            type="file"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Image 2</label>
          <span className="text validate" id="image2"></span>
          <input
            accept="image/*"
            onChange={onFileSelect2}
            type="file"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Image 3</label>
          <span className="text validate" id="image3"></span>
          <input
            accept="image/*"
            onChange={onFileSelect3}
            type="file"
            className="form-control"
          />
        </div>
        <br />
        <br />
        <div className="mb-3">
          <button onClick={addProductToDB} className="btn btn-success">
            Add
          </button>

          <Link to="/home">
            <a className="btn btn-warning">Back</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
