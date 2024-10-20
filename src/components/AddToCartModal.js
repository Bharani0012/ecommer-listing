import { MdClose } from "react-icons/md";
import Modal from 'react-modal';
import addtocartimage from '../assets/addtocartimage.png';
import './addToCart.css';
const AddToCartModal = ({ isOpen, product, onClose }) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onClose} 
            contentLabel="Add to Cart"
            style={{
                content: {
                    width: '90%',
                    maxWidth: '400px',
                    height: 'auto',
                    margin: 'auto',
                    padding: '20px'
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Optional: dimmed overlay
                }
            }}
        >
            {product && (
                <div className='cart-container'>
                    <MdClose className="close-icon-modal" onClick={onClose}/>
                    <h1>Your Cart</h1>
                    <div></div>
                    <h1>Congratulations Order Placed!</h1>
                    <img src={addtocartimage} alt={product.name} />
                    <h3>Thank you for choosing Chaperone services.
                    We will soon get in touch with you!</h3>
                    <button className="back-to-shopping" onClick={onClose}>Continue Shopping</button>
                </div>
            )}
        </Modal>
    );
};

export default AddToCartModal;
