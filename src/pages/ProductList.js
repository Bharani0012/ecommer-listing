import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import AddToCartModal from '../components/AddToCartModal';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import products from '../data/ProductsData';
import './productListStyles.css';

const ProductList = () => {
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [isSortByDropdown, settoggleSortByDropdown]=useState(false);
    const currentProducts = products.slice(0, visibleProducts);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };
    const toggleSortByDropdown=()=>{
        settoggleSortByDropdown(prevSt=>!prevSt);
    }
    const loadMoreProducts = () => {
        setVisibleProducts((prev) => prev + 12);
    };

    return (
        <div className="product-list-container">
            <div className="filter-section">
                <Filter />
            </div>
            
            <div className="product-list">
                <div className='sortby-section'>
                    <h6 className='sortby-tag'>300 products</h6>
                    <div onClick={toggleSortByDropdown} className='sortby-container'>
                            Sort By <FaAngleDown />
                        {isSortByDropdown && (
                            <ul className="sort-by-dropdown">
                                <li>Indoor Plants</li>
                                <li>Outdoor Pots</li>
                                <li>Succulents</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {visibleProducts < products.length && (
                    <button className="view-more-button" onClick={loadMoreProducts}>
                        View More
                    </button>
                )}

                <AddToCartModal
                    isOpen={modalOpen}
                    product={selectedProduct}
                    onClose={() => setModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default ProductList;
