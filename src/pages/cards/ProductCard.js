import React, { useState } from "react";
import './ProductCard.css'
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
const ProductCard = ({title, price, description, img}) => {
    const[like, setLike] = useState(false);
    const handleClick = ()=>{
        setLike(!like)
    }
  return (
      <div className="card">
        <img src={img}alt="product" />
        <div className="card-icon" onClick={handleClick}>{like ?<IoIosHeart style={{color:"red"}}/> : <CiHeart style={ {color:"black"}}/>}</div>
        <div className="card-content">
          <h4 className="price">&#8377; {price}</h4><span style={{fontWeight:'600'}}>{title}</span>
          <p className="description">
           {description}
          </p>
          <div className="icon">
           <button className="product-btn">
            View Product
           </button>
          </div>
        </div>
      </div>     
  );
};

export default ProductCard;
