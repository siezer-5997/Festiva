import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';
import img_replacement from '../assets/placeholder.jpg';


const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`}>
          <div key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.target.src = img_replacement; // Replace with placeholder image on error
                e.target.alt = 'Placeholder Image'; // Update alt text
              }}
            />
            <h4>{product.name.length > 40 ? `${product.name.slice(0, 37)}...` : product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            {/* Dynamically display stars based on the integer part of the rating */}
            <p>{product.ratings}
              {Array(Math.floor(product.ratings))
                .fill('⭐')
                .join('')}
            </p>
            <p>({product.no_of_ratings} reviews)</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
