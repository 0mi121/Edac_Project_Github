import "../styles/Shop.css";
import { url } from "./../common/constants";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({productId,image1,image2,image3,rating,price,brand,pname}) => {
    return (
      <div class="col-12 col-md-4 col-lg-3 col-sm-6 mb-5">
        <Link to={`/productdetails/${productId}`}>
          <div class="card h-100" id="card">
            {/* <h5 className="text-muted">{product.category}</h5> */}
            <Carousel>
              <Carousel.Item>
                <img
                  src={url + "/" + image1}
                  alt="First slide"
                  height="200px"
                  class="card-img-top"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={url + "/" + image2}
                  alt="Second slide"
                  height="200px"
                  class="card-img-top"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={url + "/" + image3}
                  alt="Third slide"
                  height="200px"
                  class="card-img-top"
                />
              </Carousel.Item>
            </Carousel>
            <div class="card-body">
              <ul class="list-unstyled d-flex justify-content-between rating-price">
                <li>
                  <Rating
                    precision={0.1}
                    name="size-small"
                    size="small"
                    value={rating}
                    readOnly
                  />
                </li>
                <li class="text-right price">₹{price}</li>
              </ul>
              <h3 className="brand-name">{brand}</h3>
              <p class="card-text pname">{pname}</p>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default Product
