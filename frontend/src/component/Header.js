import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Register from "../pages/Register";
import "../styles/Header.css";
import logo from '../images/logo.png'
import { Dropdown } from "react-bootstrap";
import Login from "../pages/Login";
import AddProduct from './../pages/AddProducts';
import ProductDetails from './../pages/ProductDetails';
import { useState ,useEffect} from 'react';
import { url } from './../common/constants';
import { ToastContainer, toast } from 'react-toastify';
import Profile from './../pages/Profile';

const Header = () => {
  const fnameString = localStorage.getItem("firstname")
  const fname = JSON.parse(fnameString);
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([]);
  
  // logout the user
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    window.location.href='/login'
  };

  const handleSearch = async (search) =>{
    const response = await fetch(url + `/search/${search}`);
    setProducts(await response.json());
  }

  useEffect(() => {
    setInterval(() => {

      const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
      const userString = localStorage.getItem("user");
      const userStringRole = localStorage.getItem("id");
      const user = JSON.parse(userString);
      const id = JSON.parse(userStringRole);
      setUser(user);
      setId(id)
    }, []);
  }, 5000);

  return (
    <div className="nav-bar">
      <ToastContainer />
      <BrowserRouter>
        <nav className="navbar fixed-top navbar-expand-lg shadow">
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
                  <Link className="nav-link" aria-current="page" to="/home">
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
              </ul>
            </div>

            {/* <div class="input-group rounded">
              <input
                type="search"
                class="rounded"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="border-0" id="search-addon">
                <button onClick={handleSearch}>
                  <i class="fas fa-search"></i>
                </button>
              </span>
            </div> */}

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
                      <i className="fas fa-user"></i> &nbsp;
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <button className="nav-link btn" onClick={handleLogout}>
                      <i class="fas fa-sign-out-alt"></i> &nbsp;
                        Logout
                      </button>
                    </Dropdown.Item>
                  </div>
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
            <Route path="/login" component={Login} />
            <Route path="/add_product" component={AddProduct} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/productdetails/:productId"
              component={ProductDetails}
            />
            {/* <Route path="/changepassword" component={ForgotPassword} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
