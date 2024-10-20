import { useParams } from 'react-router-dom';
import "./thankyoustyles.css";
const ThankYou = () => {
    const { productName } = useParams();

    return (
        <div className="thank-you-page">
            <h1>Thank You for your interest in {productName}!</h1>
        </div>
    );
};

export default ThankYou;
