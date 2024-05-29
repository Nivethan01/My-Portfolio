import React from "react";
import "./About.css";
import image from '../../assets/Nivethan.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="About" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm currently immersed in my third year studying Electrical and
              Electronics Engineering (EEE), all while fueling my passion for
              both hardware and software development.
            </p>
            <p>
              🛠️ Constantly honing my skills as a Full Stack web developer, with
              a particular affinity for MERN stack projects. 🌐 Crafting
              intuitive and efficient web solutions is my forte, whether it's
              developing sleek user interfaces or optimizing server-side
              functionalities.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>JAVA</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>HTML CSS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React js</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Express js</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
