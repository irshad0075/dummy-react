import React, { useState, useEffect } from "react";
import "../styles/cardStyle.css";
import "../styles/best-seller.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

import imageslide1 from "../1.jpg";
import imageslide2 from "../2.jpg";
import imageslide3 from "../3.jpg";
import imageslide4 from "../4.jpg";
import imageslide5 from "../5.jpg";

import image1 from "../m1.jpg";
import image2 from "../m2.jpg";
import image3 from "../m3.jpg";
import image4 from "../m4.jpg";
import image5 from "../m5.jpg";
import image6 from "../m6.jpg";

const BestSellerSection = () => {
  const [categories, setCategories] = useState([]);
  const [mainImage, setMainImage] = useState(image1);
  const [card1Image, setCard1Image] = useState(image4);

  const images = [
    imageslide1,
    imageslide2,
    imageslide3,
    imageslide4,
    imageslide5,
  ];

  const handleThumbnailClick = (image, cardNumber) => {
    if (cardNumber === 1) {
      setMainImage(image);
    } else if (cardNumber === 2) {
      setCard1Image(image);
    }
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  return (
    <div className="containers my-4">
      <div className="title">
        <p>Best Sale</p>
        <h2>
          Top <span>Categories</span>
        </h2>
      </div>
      <div className="d-flex">
        <div
          className="col-md-4"
          style={{ maxHeight: "400px", maxWidth: "350px", overflowY: "auto" }}
        >
          {categories.map((val, key) => (
            <div className="col-md-9 my-2" key={key}>
              <Link
                className="text-decoration-none"
                to={`/products/category/${val}`}
              >
                <Card
                  className="h-100 text-dark"
                  style={{ border: "2px solid #e1997e" }}
                >
                  <Card.Body>
                    <Card.Title>
                      {key + 1} - {val.toUpperCase().replace("-", " ")}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        <div className="col-md-2 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-10%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image2, 1)}
                >
                  <img src={image2} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image3, 1)}
                >
                  <img src={image3} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image1, 1)}
                >
                  <img src={image1} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={mainImage} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old ">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-20%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image6, 2)}
                >
                  <img src={image6} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image4, 2)}
                >
                  <img src={image4} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5, 2)}
                >
                  <img src={image5} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card1Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-20%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image6, 2)}
                >
                  <img src={image6} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image4, 2)}
                >
                  <img src={image4} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5, 2)}
                >
                  <img src={image5} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card1Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2 my-2">
          <div className="card" style={{ border: "2px solid #e1997e" }}>
            <div className="card-main">
              <div className="discount">-20%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image6, 2)}
                >
                  <img src={image6} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image4, 2)}
                >
                  <img src={image4} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5, 2)}
                >
                  <img src={image5} alt="Product" />
                </div>
              </div>
              <div className="image">
                <img src={card1Image} alt="Product" />
              </div>
              <div className="cart-line"></div>
            </div>
            <div className="content">
              <a>Top Brand</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
