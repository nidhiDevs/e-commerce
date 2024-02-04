import React from "react";
import "./Footer.css";
import facebook from "../../assets/socialmedia/facebook-logo.png";
import instagram from "../../assets/socialmedia/instagram.png";
import twitter from "../../assets/socialmedia/twitter.png";
import youtube from "../../assets/socialmedia/youtube.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div>
        <div className="footer-logo">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="heading"> Shopping</h1>
        </div>
        <div>
          <ul className="social-media-list">
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
