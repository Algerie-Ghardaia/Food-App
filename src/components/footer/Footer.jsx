import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="back">
        <div className="footer-content">
          <div className="footer-content-left ">
            <img src={assets.logo} alt="" className="s" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              commodi aperiam dolore eius voluptas. Quae minus recusandae, velit
              dolores accusantium neque, sint consequatur eum reiciendis quam
              beatae. Aperiam, iusto a!
            </p>
            <div className="footer-social-icon">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Entreprise</h2>
            <ul>
              <li>Home</li>
              <li>À propos</li>
              <li>Livraison</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Nous Cantacter</h2>
            <ul>
              <li>+213 880_527_322</li>
              <li>cantcat-Djani@ghardaia.dz</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          <p>Copyright 2024 © Dreux-Food - Tous droits réservés.</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
