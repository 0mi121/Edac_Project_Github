import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import "../styles/Header.css";
import logo from '../images/logo.jpeg'
import { Dropdown } from "react-bootstrap";

import { useState ,useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';


const Header = (props) => {
  const {search, setSearch,handleSearch} = props
  const fname = JSON.parse(localStorage.getItem("firstname"));
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [products, setProducts] = useState([]);
  
  // logout the user
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    window.location.href='/login'
  };

  useEffect(() => {
    setInterval(() => {

      const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
      const userString = localStorage.getItem("user");
      const userStringRole = localStorage.getItem("roleid");
      const user = JSON.parse(userString);
      const id = JSON.parse(userStringRole);
      setUser(user);
      setId(id)
    }, []);
  }, 5000);

  return (
    <div className="nav-bar header">
      <ToastContainer />
      
        <nav className="navbar navbar-expand-lg shadow">
          <div className="container-fluid">
            <span>
              <img className="logo" src={logo} alt="logo" />
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
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    {id == 1 ? (
                      <li className="nav-item">
                        <Link className="nav-link" to="/add_product">
                          Add Product
                        </Link>
                      </li>
                    ) : null}
                  </>
                ) : null}
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
                {user ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      <i class="fas fa-shopping-cart"></i>
                      {props.countCartItems ? (
                        <button className="badge" id="lblCartCount">
                          {props.countCartItems}
                        </button>
                      ) : (
                        ""
                      )}
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
            {user ? (
              <div className="d-flex justify-content-end">
                <div class="input-group rounded">
                <input
                  type="search"
                  className="rounded"
                  value={search}
                  onChange={({ target }) => setSearch(target.value)}
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="border-0" id="search-addon">
                  <button className="btn search-btn" onClick={handleSearch}>
                    <i class="fas fa-search"></i>
                  </button>
                </span>
              </div>
              </div>
            ) : null}
            <div className="justify-content-end">
              <div className="btn-group">
                <button
                  className="btn btn-lg dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user ? (
                    <span className="p">Hello {fname} </span>
                  ) : (
                    <>
                      <i className="fas fa-user"></i> &nbsp; Account
                    </>
                  )}
                </button>
                <div className="dropdown-menu">
                  {!user ? (
                    <div>
                      <Dropdown.Item>
                        <Link className="nav-link" to="/register">
                          <i className="fas fa-user-plus"></i> &nbsp; Sign Up
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link className="nav-link" to="/login">
                          <i class="fas fa-sign-out-alt"></i> &nbsp; Login
                        </Link>
                      </Dropdown.Item>
                    </div>
                  ) : (
                    <div>
                      <Dropdown.Item>
                        <Link className="nav-link" to="/profile">
                          <i className="fas fa-user"></i> &nbsp; Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <button className="nav-link btn" onClick={handleLogout}>
                          <i class="fas fa-sign-out-alt"></i> &nbsp; Logout
                        </button>
                      </Dropdown.Item>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Header;
