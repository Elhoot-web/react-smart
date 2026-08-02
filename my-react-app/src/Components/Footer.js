import React from "react";
import './Footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <div className="Footer">
          <div className="container">
           <div className="left-box">
            <div className="box">
                <div className="icon_box">
                    <FaPiggyBank />
                </div>
                <div className="detail">
                    <h3>Great Saving</h3>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>
            <div className="box">
                <div className="icon_box">
                    <FaShippingFast />
                </div>
                <div className="detail">
                    <h3>Free delivery</h3>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>
            <div className="box">
                <div className="icon_box">
                    <FaHeadphonesAlt />
                </div>
                <div className="detail">
                    <h3>24X7 support</h3>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>
            <div className="box">
                <div className="icon_box">
                    <FaWallet />
                </div>
                <div className="detail">
                    <h3>money back</h3>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>
            </div>
           </div>
           <div className="right_box">
            <div className="header">
                <img src="imgs/logo.webp" alt=""></img>
                <p>A situation when someone tried to persuade you to do something but you refused</p>
            </div>
            <div className="bottom">
                <div className="box">
                    <h3> Your Account</h3>
                    <ul>
                        <li>About us</li>
                        <li>Account</li>
                        <li>Payment</li>
                        <li>sales</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Products</h3>
                    <ul>
                        <li>Delivery</li>
                        <li>Track Oder</li>
                        <li>New product</li>
                        <li>old product</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Contact us</h3>
                    <ul>
                        <li>3005, silver Business PointIndia</li>
                        <li>+(015)50360731</li>
                        <li>mm20020abc@gmail.com</li>
                        
                    </ul>
                </div>
            </div>
           </div>
          </div>
        </div>
        </>
    )
}

export default Footer;