import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PredictionForm from '../components/PredictionForm';
import { getRecommendations } from '../utils/api';
import '../styles/home.css'; // Dont forget this style


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRecommendations();
            setProducts(data.products);
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
                    {products.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>
            </div>
            <PredictionForm/>
        </div>
    );
};

export default Home;
