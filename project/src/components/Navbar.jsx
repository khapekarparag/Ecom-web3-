
import React, { useContext, useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContextProvider";
import { UserLoginContext } from "../context/UserLoginContextProvider";
import Login from "./Login";



export default function Navbar() {
  let {user, setUser} = useContext(UserLoginContext)
  let {admin, setAdmin} = useContext(AdminContext)


function handleLogin(){
      // setUser(true)
}

function handlelogout(){
      setUser(false)
}

  return (
    <>
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MINI STORE</div>

     
      {/* Links */}
      <div className="nav-links">
        <Link>Home</Link>
        <Link to="/showProduct">Products</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>


      {/* Right Section */}
      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button className="search">Search</button>
      </div>

      <div id="log-register">
            {/* <Link>Register</Link> */}
            {user ? <button onClick={handlelogout}>Logout</button> : <Link to="/login" onClick={handleLogin} >login</Link>}
            <Link to="/cart">Cart</Link>
            {/* <button disabled={user ? false : true} onClick={handlelogout}>Logout</button> */}
      </div>
    </nav>
    {
      admin ? <nav className="navbar">
      <div className="nav-links"> 
            <Link to="/addProduct">ADD Product</Link>
            <Link to={"/adminShowProduct"}>Show All</Link>
      </div> 
            <button onClick={()=>{setAdmin(false)}}>Admin-Logout</button>

    </nav>
    :
    null
    }
    
    </>
    
    
  );
}