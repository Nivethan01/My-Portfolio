import React from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>I am a Web developer from India, Fresher</p>
        </div>
        <div className='footer-top-right'>
          <div className="footer-email-input">
            <img src={user} alt='User' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2024 Nivethan. All Rights Reserved</div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
