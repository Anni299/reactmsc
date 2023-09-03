import React from 'react';
import './Footer.css';
import MSC_Logo from "./MSC_Logo.png";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="f-item-con">
        <div className="app-info">

        </div>
        <div className="useful-links">
          <div className="footer-title">Links</div>
          <ul>
            <li>About</li>
            <li>Goals</li>
            <li>Events</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="help-sec">
          <div className="footer-title">Address</div>
          <ul>
            <li>IGDTUW New Delhi, India</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>
          <footer className="footer">
            <div className="container">
              <div className="row">
                  <div className="social-links" >
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>            
                  </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className='cr-con'>MLSA-IGDTUW &copy; 2022 | All Rights Reserved.</div>
    </footer>
    <div className="logo">
            <img src={MSC_Logo} alt="MSC" class="logo" />
    </div>
    </>
  );
}

export default Footer;


/*<span className='app-name'>
<span className='app-initial'>MSC</span></span>*/