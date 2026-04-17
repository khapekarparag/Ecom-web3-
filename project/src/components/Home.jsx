import React, { useContext, useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function Home() {
    let [count, setcount] = useState(0)
    let {theme, setTheme} = useContext(ThemeContext)
    let imgArr = [
        "https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-144405.jpg?semt=ais_incoming&w=740&q=80",
        "https://cdn.dribbble.com/userupload/14441108/file/original-9460586cd3dbe9f3c5e4f9de2d494ab4.jpg?resize=1504x1128&vertical=center",
        "https://cdn.dribbble.com/userupload/26565592/file/original-f09aae5d2d5c0cd4cea0f67ced269c32.jpg?resize=1504x1154&vertical=center",
        "https://cdn.dribbble.com/userupload/43106772/file/original-3b858f23e33d89ac4ce902856903f3c6.jpg?format=webp&resize=640x480&vertical=center",
        "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_incoming&w=740&q=80",
        "https://img.freepik.com/free-psd/shopping-woman-banner-template_23-2148764977.jpg",
        "https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg?semt=ais_incoming&w=740&q=80",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji27hydpaCs4kFdF-dwgLa6ZZIrn4zNL9fnOUCvzUKM14I8irBahfO5xzmRHCB1g_iCrBm1gByYyvkIhC2Fs_zDi45TkmdIkC2YnNeQP7OYfk18HTUGGgGYRDp3G0ERZccg7TFSUE-s-I1xq4cpUxUoZR4oPvvq-4O11ASq_ljLbk52J5iK957NGBR/s1280/fashion%20banner%20design.webp"
    ]


    useEffect(function(){
         let interval = setInterval(function(){
            setcount((prev)=>{
                if (prev >= imgArr.length-1){
                    return 0
                }
                else{
                return prev+1
                }
            })
        },2000)
        return ()=>clearInterval(interval)
    },[])
    

    function handleNext(){
            setcount((prev)=>{
                if (prev >= imgArr.length){
                    return 0
                }
                else{
                return prev+1
                }
            })
    }
    function handlePrev(){
        setcount((prev)=>{
                if (prev <= 0){
                    return imgArr.length-1
                }
                else{
                return prev-1
                }
            })
    }
  return (

    <>
        <div id="caroseal" style={{backgroundColor : theme ? '#1f1e1e' : 'white'}} >
          <button onClick={handlePrev}>Prev</button>
          <img src={imgArr[count]} alt=""/>
          <button onClick={handleNext}>Next</button>
        </div>


    <div className="home" style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>
      {/* HERO SECTION */}
      <section className="hero">
        <h1 style={{color : theme ? 'white' : '#1f1e1e'}}>Big Fashion Sale </h1>
        <p style={{color : theme ? 'white' : '#1f1e1e'}}>Up to 50% off on all clothing</p>
        <button>Shop Now</button>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <h2 style={{color : theme ? 'white' : '#1f1e1e'}}>Shop by Category</h2>
        <div className="category-container">
          <Link to="/mens" className="category-card">Men</Link>
            <Link to="/womens" className="category-card">Women</Link>
            <Link to="/kids" className="category-card">Kids</Link>
        </div>
      </section>

    
      {/* OFFER SECTION */}
      <section className="offer">
        <h2>Special Offer</h2>
        <p>Buy 2 Get 1 Free on selected items</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Your Brand | All Rights Reserved</p>
      </footer>

    </div>
    
    </>
    
  );
}