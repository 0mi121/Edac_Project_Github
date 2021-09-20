import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { url } from "./../common/constants";
import "../styles/ProductDetails.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { Carousel } from 'react-bootstrap';

const ProductDetails = (props) =>{
  const [product, setProduct] = useState({});

  let history = useHistory();

  const desc = () => { 
    var header  =
    document.getElementById("description");
    var headerText = header.innerText;

    var a = headerText.split("--");
    a.pop();
    var toAppend = "";
    a.forEach(function (t, i){
        toAppend +=  t +"<li>";
        
    })

    header .innerHTML = toAppend ;
}

  useEffect(() => {
    fetch(url + "/productdetails/" + props.match.params.productId)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        desc();
      });
  }, []);

  return (
    <div className="product">
      {/* <a href="/shop">Back</a> */}
      <h1 className="page-name">Product Details</h1>
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={url + "/" + product.image1}
                    alt="First slide"
                    height="600px"
                    width="auto"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={url + "/" + product.image2}
                    alt="Second slide"
                    height="600px"
                    width="auto"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={url + "/" + product.image3}
                    alt="Third slide"
                    height="600px"
                    width="auto"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-7 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="h2">{product.pname}</h1>
                  <h2 className="py-2">₹ {product.price}</h2>
                  <p className="py-2">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        precision={0.1}
                        name="size-large"
                        size="large"
                        value={product.rating}
                        readOnly
                      />
                    </Box>

                    <h4 className="list-inline-item text-dark">
                      Rating: {product.rating} star
                    </h4>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h4>Brand:</h4>
                    </li>
                    <li className="list-inline-item">
                      <p className="">{product.brand}</p>
                    </li>
                  </ul>

                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h4>Category:</h4>
                    </li>
                    <li className="list-inline-item">
                      <p className="">{product.category}</p>
                    </li>
                  </ul>

                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h4>Dimension:</h4>
                    </li>
                    <li className="list-inline-item">
                      <p className="">{product.dimension}</p>
                    </li>
                  </ul>

                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h4>Avaliable Color :</h4>
                    </li>
                    <li className="list-inline-item">
                      <p className="">{product.color}</p>
                    </li>
                  </ul>

                  <h4>Description:</h4>
                  <ul>
                  <p id="description">{product.description}</p>
                  </ul>

                  <div class="d-flex justify-content-around">
                    <button
                      type="button"
                      onClick={() => history.goBack()}
                      class="btn btn-warning btn-lg"
                    >
                      Go Back
                    </button>
                    <button type="button" class="btn btn-success btn-lg">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails