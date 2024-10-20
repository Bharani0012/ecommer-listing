import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import logo from "../assets/logo.png";
import './header.css';

const Header = () => {
    const [isPlantsDropdownOpen, setPlantsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const togglePlantsDropdown = () => {
        setPlantsDropdownOpen(prev => !prev);
    };

    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(prev => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-image" />
                <span className="company-name">Chaperone</span>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <FaBars />
            </div>
            <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li onClick={togglePlantsDropdown}>
                        Plants & Pots <FaAngleDown />
                        {isPlantsDropdownOpen && (
                            <ul className="dropdown">
                                <li>Indoor Plants</li>
                                <li>Outdoor Pots</li>
                                <li>Succulents</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={toggleServicesDropdown}>
                        Our Service <FaAngleDown />
                        {isServicesDropdownOpen && (
                            <ul className="dropdown">
                                <li>Plant Care</li>
                                <li>Delivery</li>
                            </ul>
                        )}
                    </li>
                    <li>Our Story</li>
                    <li>FAQs</li>
                </ul>
            </nav>
            <div className="icons">
                <div className="icon-container">
                    <FaUserAlt />
                </div>
                <div className="icon-container">
                    <FaShoppingCart />
                    <span className="cart-indicator">3</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
