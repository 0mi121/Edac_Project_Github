import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProduct from './../pages/AddProducts';
import ProductDetails from './../pages/ProductDetails';
import Profile from './../pages/Profile';
import Basket from './Basket';
import Address from './../pages/Address';
import Orders from './Orders';
import EditProfile from './../pages/EditProfile';
import Sucess from './../pages/Sucess';

const Router = (props) => {
    return (
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/shop">
              <Shop
                cartItems={props.cartItems}
                onRemove={props.onRemove}
                onAdd={props.onAdd}
                products={props.products}
                setProducts={props.setProducts}
                totalcategories={props.totalcategories}
                setTotalcategories={props.setTotalcategories}
                getProducts={props.getProducts}
                getTotalcategories={props.getTotalcategories}
                priceAsc={props.priceAsc}
                priceDesc={props.priceDesc}
                RatingAsc={props.RatingAsc}
                RatingDesc={props.RatingDesc}
                FindByCategory={props.FindByCategory}
              />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/order" component={Orders} />
            <Route path="/add_product" component={AddProduct} />
            <Route path="/profile" component={Profile} />
            <Route path="/address" component={Address} />
            <Route path="/success" component={Sucess} />
            <Route
              path="/productdetails/:productId"
              component={ProductDetails}
            />
            <Route path="/edit/:id">
              <EditProfile></EditProfile>
            </Route>
            <Route path="/cart">
              <Basket
                cartItems={props.cartItems}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
              />
            </Route>
            {/* <Route path="/changepassword" component={ForgotPassword} /> */}
          </Switch>
        </div>
    )
}

export default Router
