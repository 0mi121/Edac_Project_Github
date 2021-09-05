import { useEffect, useState } from "react";
import "../styles/Shop.css";
import { url } from "./../common/constants";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Dropdown, Carousel } from 'react-bootstrap';

const Shop = () => {

  // const rating = createContext();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url + "/shop");
    setProducts(await response.json());
    FindByDistinctCategory();
  };

  const priceAsc = async () => {
    const response = await fetch(url + "/orderByPriceAsc");
    setProducts(await response.json());
  }
  const priceDesc = async () => {
    const response = await fetch(url + "/orderByPriceDesc");
    setProducts(await response.json());
  }
  const FindByCategory = async (category) => {
    
    const response = await fetch(url + `/category/${category}`);
    setProducts(await response.json());
 
  }
  const FindByDistinctCategory = async (category) => {
    
    const response = await fetch(url + `/category/distinctCategory`);
    settotalcategories(await response.json());
  }

  
  const [totalcategories, settotalcategories] = useState("")
    
 const categories=["refrigerator", "Food Processor", "fan", "Geyser","AC","Burner","mixer"];




  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="shop">
      <div className="row">
        <div className="">
          <h1 className="text-center page-name">Shop page</h1>
          <div class="d-flex justify-content-between">
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
                {categories.map((category) => {
                  return (
                    <Dropdown.Item href="#/action-2">
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
                {/* <Dropdown.Item href="#/action-2">
                  <button className="btn" type="button" onClick={()=>FindByCategory("refrigerator")}>
                    refrigerator
                  </button>
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className=" container-fluid row shop-container">
            {products.map((product) => {
              return (
                <div class="col-12 col-md-4 col-lg-3 col-sm-6 mb-5">
                  <a href={`/productdetails/${product.productId}`}>
                    <div class="card h-100" id="card">
                      {/* <h5 className="text-muted">{product.category}</h5> */}
                      <Carousel>
                        <Carousel.Item>
                          <img
                            src={url + "/" + product.image1}
                            alt="First slide"
                            height="200px"
                            class="card-img-top"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={url + "/" + product.image2}
                            alt="Second slide"
                            height="200px"
                            class="card-img-top"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={url + "/" + product.image3}
                            alt="Third slide"
                            height="200px"
                            class="card-img-top"
                          />
                        </Carousel.Item>
                      </Carousel>
                      {/* <img
                        src={url + "/" + product.image1}
                        className="card-img-top"
                        height="200px"
                        class="card-img-top"
                        alt="..."
                      /> */}
                      <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between rating-price">
                          <li>
                              <Rating
                                precision={0.1}
                                name="size-small"
                                size="small"
                                value={product.rating}
                                readOnly
                              />
                          </li>
                          <li class="text-right price">₹{product.price}</li>
                        </ul>
                        <h3 className="brand-name">{product.brand}</h3>
                        <p class="card-text pname">{product.pname}</p>
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


/*Old*/
/*
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
                                    precision={0.1}
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
*/