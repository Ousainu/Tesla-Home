import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_columns">
        <div className="footer_columnOne">
          <h3 className="columnOne_header">Get to Know Us</h3>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>

        <div className="footer_columnTwo">
          <h3 className="columnTwo_header">Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>See More Make Money with Us</p>
        </div>

        <div className="footer_columnThree">
          <h3 className="columnThree_header">Amazon Payment Products</h3>
          <p>Amazon Rewards Visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line of Credit</p>
          <p>Shop with Points</p>
          <p>Credit Card Marketplace</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

        <div className="footer_columnFour">
          <h3 className="columnFour_header">Let Us Help You</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon Prime</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>

      <div className="footer_img">
        <img
          className="footer_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </div>
    </div>
  );
}

export default Footer;
