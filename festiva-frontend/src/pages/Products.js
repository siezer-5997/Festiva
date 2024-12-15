import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; // Include the Sidebar component
import ProductList from '../components/ProductList'; // For displaying products
import { fetchRegularProducts, getProductsByCategory } from "../utils/api"; // API functions
import '../styles/products.css'; // Add any specific styles for the Products page

const Products = () => {
  const [products, setProducts] = useState([]); // State for product data
  const [category, setCategory] = useState('All'); // State for selected category
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  // Fetch products based on category
  const fetchProducts = async () => {
    if (category === 'All') {
      const data = await fetchRegularProducts();
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
    <div className="products-container">
      <Navbar /> {/* Keep the same navbar */}

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

      <div className="products-header">
        <h1>Explore Products</h1>
        <p>Browse through our collection of amazing products!</p>
      </div>

      <ProductList products={products} /> {/* Display the product list */}
    </div>
  );
};

export default Products;
