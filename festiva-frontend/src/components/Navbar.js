import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active route styling
import '../styles/navbar.css';

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    setUsername(null);
    window.location.reload(); // Refresh the page to reset state
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Festiva
      </NavLink>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        {!username ? (
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
        ) :(
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              {username}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu" onMouseLeave={closeDropdown}>
                <NavLink to="/profile" className="dropdown-item" onClick={closeDropdown}>
                  Profile
                </NavLink>
                <button className="dropdown-item logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;