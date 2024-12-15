import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // Sidebar for category toggling
import PredictionForm from '../components/PredictionForm';
import ProductTrendsChart from '../components/ProductTrendsChart';
import TrendingProducts from '../components/TrendingProducts';
import { fetchTrendingProducts, getProductsByCategory } from "../utils/api"; // API functions
import '../styles/home.css';

const Home = () => {
  const [products, setProducts] = useState([]); // State for product data
  const [category, setCategory] = useState('All'); // State for selected category
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  // Fetch products based on category
  const fetchProducts = async () => {
    if (category === 'All') {
      const data = await fetchTrendingProducts();
      setProducts(data);
    } else {
      const data = await getProductsByCategory(category);
      setProducts(data);
    }
  }; 

  // Fetch products when category changes
  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="home-container">
      <Navbar />
      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          className="sidebar-toggle-btn"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <Sidebar
          setCategory={setCategory}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      <header className="hero-section">                                               
        <div className="hero-content">
          <h1>🎄 Welcome to Festiva! 🎁</h1>
          <p>
            Discover the most popular products of the season and make your holiday shopping easier with
            personalized recommendations.
          </p>
        </div>
      </header>

      <div className="main-content">
      

        {/* Trending products */}
        <section className="trending-products-section">
          <h2>Trending Products</h2>
          <TrendingProducts products={products} />
        </section>

        {/* Prediction Form */}
        <section className="prediction-form-section">
          <h2>Predict Product Demand</h2>
          <PredictionForm />
        </section>

        {/* Product Trends Chart */}
        <section className="product-trends-chart-section">
          <h2>Trending Product Prices</h2>
          <ProductTrendsChart products={products} />
        </section>
      </div>
    </div>
  );
};

export default Home;
