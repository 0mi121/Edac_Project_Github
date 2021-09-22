import React from 'react'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from './../pages/Shop';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Register from './../pages/Register';
import Login from '../pages/Login';
import AddProduct from './../pages/AddProducts';
import Profile from './../pages/Profile';
import ProductDetails from './../pages/ProductDetails';

const Router = () => {
    return (
        <div>
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
          </Switch>
        </div>
        </div>
    )
}

export default Router
