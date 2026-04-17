import React, { useContext } from "react";
import "../style/About.css";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function About() {
  let {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className="about" style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>

      {/* HERO SECTION */}
      <section className="about-hero" >
        <h1 >About Us</h1>
        <p  >Style that defines you.</p>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <h2 style={{color : theme ? 'white' : '#1f1e1e'}}>Who We Are</h2>
        <p style={{color : theme ? 'white' : '#1f1e1e'}}>
          We are a modern fashion brand offering trendy and affordable clothing
          for men, women, and kids. Our goal is to bring style and comfort together.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <div className="feature-card">
          <h3>👕 Quality Products</h3>
          <p>Premium quality fabrics with latest designs.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable delivery at your doorstep.</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>Safe and secure payment methods.</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team" style={{backgroundColor : theme ? '#1f1e1e' : 'white'}}>
        <h2 style={{color : theme ? 'white' : '#1f1e1e'}}>Our Vision</h2>
        <p style={{color : theme ? 'white' : '#1f1e1e'}}>
          To become a leading online fashion destination that inspires confidence
          and self-expression through clothing.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>© 2026 Your Brand. All Rights Reserved.</p>
      </footer>

    </div>
  );
}