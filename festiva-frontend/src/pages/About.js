import React, {useState } from 'react';
import '../styles/global.css'; // Shared styles
import '../styles/about.css'; // Page-specific styles
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const About = () => {
  const [setCategory] = useState('All'); // State for selected category
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  return (
    <div className="page-container">
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
      <div className="about-container content-wrapper">
        <h1>About Festiva</h1>
        <p>
          Festiva is your go-to platform for finding the most popular and trending products
          for every season. We believe in making your shopping experience seamless and enjoyable.
          Whether you're searching for the latest trends or looking for personalized recommendations,
          Festiva has got you covered!
        </p>
        <p>
          Our mission is to connect people with products they'll love while delivering an
          outstanding online shopping experience. With innovative tools and powerful product filters,
          Festiva ensures you find exactly what you're looking for.
        </p>
        <p>Shop with Festiva and discover why we are the future of e-commerce.</p>
      </div>
    </div>
  );
};

export default About;
