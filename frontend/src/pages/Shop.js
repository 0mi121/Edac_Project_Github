import React, { useEffect, useState } from "react";
import "../styles/Shop.css";
import { url } from "./../common/constants";
import { Dropdown } from 'react-bootstrap';
import Product from './../component/Product';

const Shop = () => {

  // const rating = createContext();
  const [products, setProducts] = useState([]);

  const [totalcategories, setTotalcategories] = useState([])

  const getProducts = async () => {
    const response = await fetch(url + "/shop");
    setProducts(await response.json());
  };

  const getTotalcategories = async (category) => {
    const response = await fetch(url + `/distinctCategory`)
      .then(response => response.json())
      .then(response => {
        setTotalcategories(response);
        console.log(response);
      });
  } 

  const priceAsc = async () => {
    const response = await fetch(url + "/orderByPriceAsc");
    setProducts(await response.json());
  }

  const priceDesc = async () => {
    const response = await fetch(url + "/orderByPriceDesc");
    setProducts(await response.json());
  }

  const RatingAsc = async () => {
    const response = await fetch(url + "/orderByRatingAsc");
    setProducts(await response.json());
  }

  const RatingDesc = async () => {
    const response = await fetch(url + "/orderByRatingDesc");
    setProducts(await response.json());
  }

  const FindByCategory = async (category) => {
    
    const response = await fetch(url + `/category/${category}`);
    setProducts(await response.json());
    console.log(category)
  }

  const FindByCategorySortByPriceAsc = async (category) => {
    
    const response = await fetch(url + `/findByCategoryOrderByPriceAsc/${category}`);
    setProducts(await response.json());
  }

  useEffect(() => {
    getProducts();
    getTotalcategories()
  }, []);

  return (
    <div className="shop">
      <div className="row">
        <div className="">
          <h1 className="text-center page-name">Shop page</h1>
          <div class="d-flex justify-content-between container-fluid">
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
          <div className=" container-fluid row shop-container">
            {products.map((product) => {
              return (
                <Product key={product.productId} {...product}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

