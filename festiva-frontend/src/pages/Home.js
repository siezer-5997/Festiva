import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PredictionForm from '../components/PredictionForm';
import ProductTrendsChart from '../components/ProductTrendsChart';
import { getRecommendations } from '../utils/api';
import '../styles/home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecommendations();
      if (data && data.products) {
        setProducts(data.products);
      } else {
        console.error('Failed to fetch products or no products available');
        setProducts([]); // Fallback to an empty array
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Welcome to Festiva!</h1>
        <p>Shop trending products this holiday season with personalized recommendations.</p>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <PredictionForm />
      <div style={{ marginTop: '50px', padding: '20px' }}>
        <h2>Product Trends</h2>
        <ProductTrendsChart />
      </div>
    </div>
  );
};

export default Home;
