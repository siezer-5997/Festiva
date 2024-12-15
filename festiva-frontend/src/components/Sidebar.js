import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ setCategory, onClose }) => {
  const categories = [
    "All",
    "home, kitchen, pets",
    "kids' fashion",
    "accessories",
    "sports & fitness",
    "women's clothing",
    "men's clothing",
    "men's shoes",
    "women's shoes",
    "kid's fashion",
    "Holiday Specials",
  ];

  return (
    <div className="sidebar">
      <button className="sidebar-close-btn" onClick={onClose}>
        ✖
      </button>
      <div className="sidebar-header">Browse Categories</div>
      <div className="sidebar-links">
        {categories.map((category) => (
          <button
            key={category}
            className="sidebar-link"
            onClick={() => {
              setCategory(category);
              onClose();
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
