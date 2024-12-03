import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <header style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>Welcome to Festiva</h1>
                <p>Discover trending products for the holiday season!</p>
            </header>
        </div>
    );
};

export default Home;
