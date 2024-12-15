import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../styles/ProductDetails.css';
import img_replacement from '../assets/placeholder.jpg';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="product-details-page">
            <Navbar />
            <div className="product-details-wrapper">
                {/* Product Image and Thumbnails */}
                <div className="product-images">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="main-product-image"
                        onError={(e) => {
                            e.target.src = img_replacement; // Placeholder on error
                            e.target.alt = 'Placeholder Image';
                        }}
                    />
                    {/* Example: Thumbnails */}
                    <div className="thumbnail-images">
                        <img src={product.image} alt="Thumbnail 1" />
                        <img src={product.image} alt="Thumbnail 2" />
                        <img src={product.image} alt="Thumbnail 3" />
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-info">
                    <h1 className="product-title">{product.name.length > 50 ? `${product.name.slice(0, 47)}...` : product.name}</h1>
                    <p className="product-category">{product.main_category} &gt; {product.sub_category}</p>
                    <div className="product-pricing">
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        <span className="original-price">${product.actual_price.toFixed(2)}</span>
                        <span className="discount">{`-${Math.round((1 - product.price / product.actual_price) * 100)}%`}</span>
                    </div>
                    <div className="ratings">
                        <span className="stars">{product.ratings}{Array(Math.round(product.ratings)).fill('⭐').join('')}</span>
                        <span className="reviews">({product.no_of_ratings} reviews)</span>
                    </div>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="buy-now-btn">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
