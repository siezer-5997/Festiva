import React, {useState } from 'react';
import '../styles/global.css'; // Shared styles
import '../styles/contact.css'; // Page-specific styles
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Contact = () => {
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
      <div className="contact-container content-wrapper">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! If you have any questions, feedback, or suggestions,
          feel free to reach out to us.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
