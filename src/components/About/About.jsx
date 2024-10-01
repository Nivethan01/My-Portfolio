import React from "react";
import "./About.css";
import image from '../../assets/Nivethan.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="About" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m currently in my final year of studying Electrical and Electronics Engineering (EEE), while passionately exploring both hardware and software development. 🛠️ As a Full Stack web developer, I’m continuously honing my skills, with a strong focus on MERN stack projects, basic knowledge in SQL, and proficiency in problem-solving using Java, along with a solid understanding of object-oriented programming (OOP) concepts. 🌐 Whether it’s crafting sleek user interfaces or optimizing server-side functionalities, building intuitive and efficient web solutions is my forte.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>Java</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>HTML, CSS</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Express JS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>SQL</p>
                <hr style={{ width: "35%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
