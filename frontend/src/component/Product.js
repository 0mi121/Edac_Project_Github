import "../styles/Shop.css";
import { url } from "./../common/constants";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({productId,image1,image2,image3,rating,price,brand,pname,onAdd,product}) => {
    return (
      <div className="col-12 col-md-4 col-lg-3 col-sm-6 mb-5">
          <div className="card h-100" id="card">
            {/* <h5 className="text-muted">{product.category}</h5> */}
            <Carousel>
              <Carousel.Item>
                <img
                  src={url + "/" + image1}
                  alt="First slide"
                  height="200px"
                  className="card-img-top product-card"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={url + "/" + image2}
                  alt="Second slide"
                  height="200px"
                  className="card-img-top product-card"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={url + "/" + image3}
                  alt="Third slide"
                  height="200px"
                  className="card-img-top product-card"
                />
              </Carousel.Item>
            </Carousel>
            <div className="card-body">
              <ul className="list-unstyled d-flex justify-content-between rating-price">
                <li>
                  <Rating
                    precision={0.1}
                    name="size-small"
                    size="small"
                    value={rating}
                    readOnly
                  />
                </li>
                <li className="text-right price">₹{price}</li>
              </ul>
              <h3 className="brand-name">{brand}</h3>
              <p className="card-text pname">{pname}</p>
              <div className="d-flex justify-content-around">
              <button className="btn btn-warning" onClick={() => onAdd(product)}>Add To Cart</button>
              <Link className="btn btn-info" to={`/productdetails/${productId}`}>Show</Link>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Product
