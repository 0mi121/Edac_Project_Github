import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Register from "../pages/Register";
import "../styles/Header.css";
import logo from '../images/logo.png'
import { Dropdown } from "react-bootstrap";
import Logout from "../pages/logout";
import Login from "../pages/Login";
// import ForgotPassword from './../pages/ForgotPassword';
import AddProduct from './../pages/AddProducts';
import ProductDetails from './../pages/ProductDetails';

const Header = () => {
  let logStatus = JSON.parse(localStorage.getItem("loggedStatus"));
  console.warn(logStatus);
  return (
    <div className="nav-bar">
      <BrowserRouter>
        <nav className="navbar fixed-top navbar-expand-lg shadow">
          <div className="container-fluid">
            <span>
              <img className="logo" src={logo} alt="logo"/>
              {/* <i className="fab fa-shopify"></i> */}
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav megamenu border-box">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add_product">
                    Add Product
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/productdetails/:productId">
                    Product Details
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* <form className="form-inline border-box  my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-grad my-2 my-sm-0 " type="submit">Search</button>
            </form> */}
            {/* <Link className="nav-link" to="/register">
                <i className="fas fa-user-plus"></i> &nbsp; Sign Up
              </Link>
              {logStatus ? (
                <li onClick={Logout}>
                  {" "}
                  <Link className="nav-link" to="/logout">
                    <i class="fas fa-sign-out-alt"></i> &nbsp; LogOut
                  </Link>
                </li>
              ) : (
                <li>
                  <Link className="nav-link" to="/login">
                    <i className="fas fa-sign-in-alt"></i> &nbsp; Login
                  </Link>
                </li>
              )} */}
            <div className="btn-group">
              <button
                className="btn btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i> &nbsp; Account
              </button>
              <div className="dropdown-menu">
                <Dropdown.Item>
                  <Link className="nav-link" to="/register">
                    <i className="fas fa-user-plus"></i> &nbsp; Sign Up
                  </Link>
                </Dropdown.Item>
                {localStorage.getItem("loggedStatus") ? (
                  <Dropdown.Item>
                    <Link className="nav-link" to="/logout">
                      <i class="fas fa-sign-out-alt"></i> &nbsp; LogOut
                    </Link>
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item>
                    <Link className="nav-link" to="/logout">
                      <i class="fas fa-sign-out-alt"></i> &nbsp; LogOut
                    </Link>
                  </Dropdown.Item>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <Switch>
            <Route path="/home" exact={true} component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/add_product" component={AddProduct} />
            <Route path="/productdetails/:productId" component={ProductDetails} />
            {/* <Route path="/changepassword" component={ForgotPassword} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
