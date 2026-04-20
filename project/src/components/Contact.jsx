import React from "react";
import "../style/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      {/* <div className="contact-hero">
        <h1>About Our Company</h1>
        <p>We deliver high-quality fashion products at affordable prices.</p>
      </div> */}

      {/* ABOUT SECTION */}
      {/* <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to our eCommerce store! We are passionate about bringing you
          the latest trends in men's, women's, and kids' fashion. Our goal is to
          provide high-quality products with a seamless shopping experience.
        </p>

        <p>
          Founded in 2025, our company focuses on customer satisfaction,
          fast delivery, and affordable pricing. We believe in building long-term
          relationships with our customers.
        </p>
      </div> */}

      {/* CONTACT DETAILS */}
      <div className="contact-details">
        <h2>Contact Information</h2>

        <div className="info-box">
          <p><strong>📍 Address:</strong> Nagpur, Maharashtra, India</p>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> support@yourstore.com</p>
          <p><strong>🕒 Working Hours:</strong> Mon - Sat (9 AM - 7 PM)</p>
        </div>
      </div>

      {/* OPTIONAL FORM */}
      <div className="contact-form-section">
        <h2>Send us a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>

    </div>
  );
}