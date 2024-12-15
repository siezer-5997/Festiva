import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TrendingProducts.css';

import img_replacement from '../assets/placeholder.jpg'

const TrendingProducts = ({ products }) => {
  return (
    <div className="trending-products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  // Shorten the product name for better display
  const shortenedName = product.name.length > 50 ? `${product.name.slice(0, 47)}...` : product.name;

  return (
    <div className="product-list">
      <Link to={`/product/${product.id}`}>
        <div className="product-card-trend">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.target.src = img_replacement; // Replace with placeholder image on error
              e.target.alt = 'Placeholder Image'; // Update alt text
            }}
          />
          <div className="product-info">
            <h3>{shortenedName}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className='rating'>{product.ratings}
              {Array(Math.floor(product.ratings))
                .fill('⭐')
                .join('')}
            </p>
            <p>({product.no_of_ratings} reviews)</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="view-product-link">
              View Product
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingProducts;
