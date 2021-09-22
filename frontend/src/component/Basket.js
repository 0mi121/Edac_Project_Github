import React from 'react';
import "../styles/Basket.css";
import { url } from './../common/constants';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="container col">
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
            <div className="col-1 my-5">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              {item.qty}{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right my-5">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
            <hr></hr>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="total container">
              <div className="d-flex justify-content-end">
                <div className="col-2">Items Price</div>
                <div className="col-2">₹ {itemsPrice.toFixed(2)}</div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="col-2">Tax Price</div>
                <div className="col-2">₹ {taxPrice.toFixed(2)}</div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="col-2">Shipping Price</div>
                <div className="col-2">₹ {shippingPrice.toFixed(2)}</div>
              </div>

              <div className="d-flex justify-content-end">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-2">
                  <strong>₹ {totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-around">
              <button
                className="btn btn-lg btn-success"
                onClick={() => alert("Implement Checkout!")}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}