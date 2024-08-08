import React from "react";

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="" alt="" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            As a passionate developer, I specialize in crafting intuitive, high-performance softwares that deliver seamless user experiences on various devices and platforms. With a strong foundation in coding and a keen eye for design, I take pride in transforming ideas into functional, visually appealing softwares.
            </p>
            <p className="hero--section-description">
            My approach is client-focused, ensuring that each project aligns with the business goals and resonates with the target audience. Whether it’s building a sleek consumer app or a complex enterprise solution, I am committed to delivering top-quality results that exceed expectations.
            </p>
          </div>
        </div>
      </section>
    );
  }