import React, { useEffect, useState } from "react";
import "../styles/Shop.css";
import { url } from "./../common/constants";
import { Dropdown } from 'react-bootstrap';
import Product from './../component/Product';
import { ToastContainer, toast } from 'react-toastify';
import Basket from './../component/Basket';

const Shop = (props) => {
  const products=props.products
  const setProducts=props.setProducts
  const totalcategories=props.totalcategories
  const setTotalcategories=props.setTotalcategories
  const getProducts=props.getProducts
  const getTotalcategories=props.getTotalcategories
  const priceAsc=props.priceAsc
  const priceDesc=props.priceDesc
  const RatingAsc=props.RatingAsc
  const RatingDesc=props.RatingDesc
  const FindByCategory=props.FindByCategory
  return (
    <div className="shop">
      <ToastContainer />
      <div className="row">
        <div className="">
          <h1 className="text-center page-name">Shop page</h1>
          <div class="row  container-fluid">
            <div className="col-lg-4 col-sm-12 col-md-4  d-flex justify-content-center">
            <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Sort By Price
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="">
                  <button className="btn" type="button" onClick={priceAsc}>
                    Lowest
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn" type="button" onClick={priceDesc}>
                    Higehst
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4  d-flex justify-content-center">
            <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {totalcategories.map((category) => {
                  return (
                    <Dropdown.Item href="">
                      <button
                        className="btn"
                        type="button"
                        onClick={() => FindByCategory(`${category}`)}
                      >
                        {category}
                      </button>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
            </div>

            {/* <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Sort By Price
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="">
                  <button className="btn" type="button" onClick={FindByCategorySortByPriceAsc}>
                    Ascending
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn" type="button" onClick={priceDesc}>
                    Descending
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <div className="col-lg-4 col-sm-12 col-md-4  d-flex justify-content-center">
            <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Sort By Rating
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="">
                  <button className="btn" type="button" onClick={RatingDesc}>
                    Highest 
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn" type="button" onClick={RatingAsc}>
                    Lowest
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
          <div className=" container-fluid row shop-container">
            {products.map((product) => {
              return (
                <Product onAdd={props.onAdd} product={product} key={product.productId} {...product}/>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Basket
          cartItems={props.cartItems}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        /> */}
    </div>
    
  );
};

export default Shop;

