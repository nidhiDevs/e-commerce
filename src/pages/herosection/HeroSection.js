import React from "react";
import banner from "../../assets/banner.png";
import "./HeroSection.css";
import ProductCard from "../cards/ProductCard";
import { Product } from "../../constant/Constant";
const HeroSection = () => {
  return (
    <div className="hero-section-main">
      <div className="hero-section">
        <div className="column">
          <h1 className="heading">Hello! User Lets get Shopping With us</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
            sit amet
          </p>
          <button className="btn-section">Click Here</button>
        </div>
        <div className="column">
          <img className="img-section" src={banner} alt="img"></img>
        </div>
      </div>
      <div className="new-product-section">
        <div className="">
          <div className="new-product">
            <h1>New Arriable For Every Person</h1>
          </div>
          <p className="product-desc">
          Explore our extensive range of clothing that seamlessly blends quality craftsmanship with the latest trends. From casual wear that effortlessly takes you from day to night to statement pieces that make heads turn, we have something for every occasion. Our commitment to style is matched only by our dedication to providing you with the utmost comfort and confidence in every outfit.
          </p>
          <div className="">
            {Product.map((item, index) => (
               item.category ==="men" && (
              <div key={index} className="">
                <h1>Shop For {item.category}</h1>       
                 <div className="card-container"> {item.data.map((product,index) => (
                  <ProductCard  key={index} title={product.title} price={product.price} description={product.description} img={product.image}/>
                ))} </div>          
              </div>
            ) 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
