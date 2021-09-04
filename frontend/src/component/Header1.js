import { Navbar, Nav, NavDropdown} from 'react-bootstrap' 
import { Link, useHistory} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from './../pages/Register';
import AddProduct from './../pages/AddProducts';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Header1 = () => {
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem('email'))
    console.warn(user)
    function logout () {
        localStorage.clear();
        history.push('/register')
    }
return (
  <div>
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {localStorage.getItem("email") ? (
            <>
              <Link to="/add_product">Add Product</Link>
              <Link to="/shop">Update Product</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("email") ? (
          <Nav>
            <NavDropdown title={user && user.email}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
        ;
      </Navbar>

      <Switch>
        <Route path="/register" component={Register} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/login" component={Login} />
        <Route path="/add_product" component={AddProduct} />
        {/* <Route path="/changepassword" component={ForgotPassword} /> */}
      </Switch>
    </BrowserRouter>
  </div>
);
}
export default Header1;