import React from "react";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, Tony here!</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              Hi, I am Tony.
              <br />Looking to elevate your business with a custom website, mobile app, or desktop application? Get in touch and let's get started!
            </p>
          </div>
         <a href="#Contact"><button className="btn btn-primary">Get In Touch</button></a>
        </div>
        <div className="hero--section--img">
          <img src="/img/tony.jpg" style={{borderRadius:"15px 50px"}} alt="Hero Section" />
        </div>
      </section>
    );
  }