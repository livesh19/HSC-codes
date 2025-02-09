import React from "react";

const Header = ({ toggleMenu }) => {
  return (
    <header>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <h1>NVOCC Management System</h1>
    </header>
  );
};

export default Header;