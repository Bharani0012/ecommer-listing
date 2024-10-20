import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="newsletter">
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem Aut Necessitatis Enim</p>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <button>SUBSCRIBE</button>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>ABOUT US</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Help & Support</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>OUR SERVICES</h4>
                        <ul>
                            <li>Book Maali</li>
                            <li>Plant Day Care</li>
                            <li>Rent Plants</li>
                            <li>Plants & Pots</li>
                            <li>Gardening Tools</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li>My Account</li>
                            <li>Orders & Returns</li>
                            <li>Track Order</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>GET IN TOUCH</h4>
                        <address>
                            F-262, First Floor,<br />
                            Sudhan Lok Phase-III,<br />
                            Gurgaon, Haryana, India 122003
                        </address>
                        <p>Call: +919552627272</p>
                        <p>Email: care@chaperoneplants.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                <p>CHAPERONE</p>
                <p>
                    Lorem ipsum dolor sit amet.
                    Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a<br/>
                    numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates 
                    ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.<br/>
                    Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                </p>
                    <div className="social-icons">
                        <h4>Follow us on</h4>
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
