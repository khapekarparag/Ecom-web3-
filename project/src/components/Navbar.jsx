
import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {

  let [login, setLogin] = useState(false)




  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MINI STORE</div>

     

      {/* Links */}
      <div className="nav-links">
        <Link>Home</Link>
        <Link>Products</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link to="/addProduct">ADD Product</Link>
      </div>


      {/* Right Section */}
      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button className="search">Search</button>
      </div>

      <div id="log-register">
            {/* <Link>Register</Link> */}
            <Link to="/login" >Login</Link>
      </div>

    </nav>
  );
}