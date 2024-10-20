import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AddToCartModal from './AddToCartModal';
import './productCardStyles.css';

const ProductCard = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleViewProduct = () => {
        navigate(`/thank-you/${product.name}`);
    };

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <FaRegHeart className="heart-icon" />
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="view-product-btn" onClick={handleViewProduct}>View Product</button>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">Indoor plants low maintenance</p>
            <div className="product-rating">
                <span className="star-icons">⭐⭐⭐⭐⭐</span>
                <span className="rating-value">4.9</span>
            </div>
            <div className="product-price">
                <span className="old-price">₹359</span>
                <span className="new-price">₹299</span>
            </div>
            <div className="product-buttons">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    + Add to Cart -
                </button>
                <button className="buy-or-rent-btn">Buy or Rent</button>
            </div>
            <AddToCartModal 
                isOpen={isModalOpen} 
                product={product} 
                onClose={closeModal} 
            />
        </div>
    );
};

export default ProductCard;
