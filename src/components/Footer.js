import React from 'react'
import { FaInstagram, FaLinkedin  } from "react-icons/fa"

import {PaymentTypes, webLinks, quickLinks} from './Data'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <div class="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div class="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 class="currency-title">CURRENCY</h4>
          <p class="currency">
            <img src="https://res.cloudinary.com/dh1akzmfk/image/upload/v1766469961/ttd4ktlmkzsccjbytiat.png" alt="us flag" />
            <span class="flag">+ USD</span>
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      <div class="footer-bottom">
        <div class="footer-col">
          <h3>mettä muse</h3>
          <ul>
            {webLinks.map(link => <li>{link}</li>)}
          </ul>
        </div>

        <div class="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            {quickLinks.map(link => <li>{link}</li>)}
          </ul>
        </div>

        <div class="footer-col">
          <h4>FOLLOW US</h4>
          <div class="social-icons">
            <span><FaInstagram /></span>
            <span><FaLinkedin  /></span>
          </div>

          <h4 class="accepts-title">mettä muse ACCEPTS</h4>
          <div class="payments">
            {PaymentTypes.map(item => 
              <img src={item.icon} alt={item.name} />
            )}
          </div>
        </div>
      </div>

      <p class="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer