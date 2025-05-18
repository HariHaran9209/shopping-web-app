import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Still Waiting in a Queue?</h2>
        <p>Shop smarter. Get your products faster and skip the hassle.</p>
        <button>View Products</button>
      </div>
    </header>
  );
};

export default Header;
