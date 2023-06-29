import React, { useState, useEffect } from "react";
import "../styles/cardStyle.css";
import "../styles/best-seller.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import imageslide1 from "../1.jpg";
import imageslide2 from "../2.jpg";
import imageslide3 from "../3.jpg";
import imageslide4 from "../4.jpg";
import imageslide5 from "../5.jpg";
import { Link } from "react-router-dom";
import image1 from "../m1.jpg";
import image2 from "../m2.jpg";
import image3 from "../m3.jpg";
import image4 from "../m4.jpg";
import image5 from "../m5.jpg";
import axios from "axios";

const BestSellerSection = () => {
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainImage, setMainImage] = useState(image1);
  const [card1Image, setCard1Image] = useState(image2);
  const [card2Image, setCard2Image] = useState(image4);
  const [card3Image, setCard3Image] = useState(image2);

  const images = [imageslide1, imageslide2, imageslide3, imageslide4, imageslide5];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containers my-4">
      <div className="title">
        <p>Best Seller</p>
        <h2>
          Tattoo <span>Designs</span>
        </h2>
      </div>
      <div className="row">
        <div
          className="col-md-3"
          style={{ maxHeight: "400px", maxWidth: "450px", overflowY: "auto" }}
        >
          {categories.map((val, key) => (
            <div className="col-md-9 my-2" key={key}>
              <Link
                className="text-decoration-none"
                to={`/products/category/${val}`}
              >
                <Card className="h-100 text-dark">
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

        <div className="col-md-3 my-3">
          <div className="card">
            <div className="card-main">
              <div className="discount">-10%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(card1Image)}
                >
                  <img src={card1Image} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image3)}
                >
                  <img src={image3} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image1)}
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
              <a href="javascript:void(0);">Incidid Tongue Bar</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-3">
          <div className="card">
            <div className="card-main">
              <div className="discount">-10%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(card2Image)}
                >
                  <img src={card2Image} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image5)}
                >
                  <img src={image3} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image3)}
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
              <a href="javascript:void(0);">Incidid Tongue Bar</a>
              <p>
                <span className="money">$81.00</span>
                <span className="price-old">$89.00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3 my-3">
          <div className="card">
            <div className="card-main">
              <div className="discount">-10%</div>
              <div className="product-container">
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(card3Image)}
                >
                  <img src={card3Image} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image3)}
                >
                  <img src={image3} alt="Product" />
                </div>
                <div
                  className="p"
                  onClick={() => handleThumbnailClick(image1)}
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
              <a href="javascript:void(0);">Incidid Tongue Bar</a>
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
