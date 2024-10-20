import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Footer from './components/Footer';
import Header from './components/Header';
import ProductOverview from './components/ProductOverView';
import ProductList from './pages/ProductList';
import ThankYou from './pages/ThankYou';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/thank-you/Monstera' && (
        <>
          <Header />
          <ProductOverview />
        </>
      )}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/thank-you/:productName" element={<ThankYou />} />
      </Routes>
      {location.pathname !== '/thank-you/Monstera' && <Footer />}
    </>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
