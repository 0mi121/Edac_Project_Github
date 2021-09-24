import React from 'react';
import "../styles/Basket.css";
import { url } from './../common/constants';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default function Basket(props) {


  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="container basket col">
      <h1 className="text-center page-name">Cart page</h1>
      <div className="cart my-4">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.productId} className="row cart-product">
            <div className="col-sm-12 col-md-2">
              <img
                src={url + "/" + item.image1}
                height="150px"
                className="card-img-top product-card cart-image"
              />
            </div>
            <div className="col-sm-12 col-md-4 my-5">{item.pname}</div>
            <div className="col-sm-12 col-md-2 my-5">
              {item.brand}
              <br />
              {item.category}
            </div>
            <div className="col-2 my-5">
              <button onClick={() => onRemove(item)} className="remove btn-sm">
                -
              </button>
              <span className="qty"> {item.qty} </span>
              <button onClick={() => onAdd(item)} className="add btn-sm">
                +
              </button>
            </div>

            <div className="col-2 my-5">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
            <hr></hr>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="col-3">
                <div className="row total">
                <div className="col-6">
                  Items Price
                  <br />
                  Tax Price
                  <br />
                  Shipping Price
                  <br />
                  <strong>Total Price</strong>
                </div>
                <div className="col-6">
                  ₹ {itemsPrice.toFixed(2)}
                  <br />₹ {taxPrice.toFixed(2)}
                  <br />₹ {shippingPrice.toFixed(2)}
                  <br />
                  <strong>₹ {totalPrice.toFixed(2)}</strong>
                </div>
                </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-around">
              <Link
              className="btn btn-lg btn-success"
                to="/address"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}