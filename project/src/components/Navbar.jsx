
import React, { useState } from "react";
import "../style/navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">iTpreneur</div>

     

      {/* Links */}
      <ul className="nav-links active">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}