
import React, { useContext, useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContextProvider";
import { UserLoginContext } from "../context/UserLoginContextProvider";

import { CartProdValueContext } from "../context/CartProdValueContextProvider";


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  let {user, setUser} = useContext(UserLoginContext)
  let {admin, setAdmin} = useContext(AdminContext)

  let {cartval, setCartval} = useContext(CartProdValueContext)
  let [search, setSearch] = useState("")


function handlelogout(){
      setUser(false)
}

function handleSearch(e){
    let value = e.target.value
    setSearch(value)
    console.log(search);
    

}
function handleSubmit(){

}


  return (
    <>
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MINI STORE</div>

    {/* Right Section */}
      <div className="nav-right">
        {/* <form action="" method="post" id="searchForm"> */}
                <input id="searchInput" onChange={handleSearch} type="text" placeholder="Search..." />
                <button className="search" onClick={handleSubmit}>Search</button>
        {/* </form>  */}
      </div>
     
      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/showProduct">Products</Link>
        <Link to='/about'>About</Link>
        <Link>Contact</Link>
      </div>

      <div id="log-register">
            {/* <Link>Register</Link> */}
            {user ? <button onClick={handlelogout}>Logout</button> : <Link to="/login" >Login</Link>}
            {user ? <Link to="/cart">{cartval}<FontAwesomeIcon icon={faCartShopping}/>Cart</Link> : <button>Cart</button> }
            {/* <button disabled={user ? false : true} onClick={handlelogout}>Logout</button> */}
      </div>
    </nav>
    {
      admin ? <nav className="navbar">
      <div className="nav-links"> 
            <Link to="/addProduct">ADD Product</Link>
            <Link to="/showadminprod">Show All</Link>
      </div> 
            <button onClick={()=>{setAdmin(false)}}>Admin-Logout</button>
    </nav>:null
    }
    </>   
  );
}