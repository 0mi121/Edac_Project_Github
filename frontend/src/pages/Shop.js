import { useEffect, useState } from "react";
import "../styles/Shop.css";
import { url } from "./../common/constants";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Dropdown } from 'react-bootstrap';

const Shop = () => {

  // const rating = createContext();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url + "/shop");
    setProducts(await response.json());
  };

  const priceAsc = async () => {
    const response = await fetch(url + "/orderByPriceAsc");
    setProducts(await response.json());
  }
  const priceDesc = async () => {
    const response = await fetch(url + "/orderByPriceDesc");
    setProducts(await response.json());
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="shop">
      <div className="row">
        <div className="">
          <div className=" container-fluid row">
          <h1 className="text-center page-name">Shop page</h1>
            <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By Price
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <button className="btn" type="button" onClick={priceAsc}>
                    Ascending
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                <button className="btn" type="button" onClick={priceDesc}>
                    Descending
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="dropdown-price">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">
                  <button className="btn" type="button" onClick={priceAsc}>
                    Ascending
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {products.map((product) => {
              return (
                <div className="col-md-3 col-lg-3 col-xs-12 col-sm-6 columns figure">
                  <a href={`/productdetails/${product.productId}`}>
                    <div className="card" id="card">
                      <div key={product.productId}></div>
                      <h1 className="card-title text-center">
                        {product.category}
                      </h1>
                      <img
                        src={url + "/" + product.image1}
                        className="card-img-top"
                        height="200px"
                        alt={product.brand + " " + product.category}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <li className="list-group-item">
                            <p className="card-text pname">{product.pname}</p>
                          </li>
                          <li className="list-group-item">
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                              <span className="price">₹ {product.price}</span>
                              <span>
                                <Box
                                  component="fieldset"
                                  mb={3}
                                  borderColor="transparent"
                                >
                                  <Rating
                                    precision={0.5}
                                    name="size-large"
                                    size="large"
                                    value={product.rating}
                                    readOnly
                                  />
                                  <span className="rating">
                                    {product.rating}
                                  </span>
                                </Box>
                              </span>
                            </div>
                          </li>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

