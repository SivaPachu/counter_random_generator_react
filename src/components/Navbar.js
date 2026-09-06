import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-icon">♾️</span>
        <span className="brand-name">Nexus</span>
      </div>
      <ul className="nav-links">
        <li><a href="#counter">Counter</a></li>
        <li><a href="#random">Random</a></li>
      </ul>
    </nav>
  );
}