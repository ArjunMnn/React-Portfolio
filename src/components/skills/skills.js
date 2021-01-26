import React from "react";
import TagCloud from "react-tag-cloud";
// import randomColor from "randomcolor";

function Skills() {
  return (
    <section id="skills" className="section3">
      <div className="head-wrapper">
        <div className="heading">
          What do I do?
          <div className="underline"></div>
        </div>

        <div className="backhead2">SKILLS</div>
      </div>
      <div className="skills-parent-container">
        <div className="skills-sets-container">
          <div className="skills-label-container">
            <span className="skills-label">Programming Languages</span>
          </div>
          <div className="skills-separator-container">
            <div className="skills-separator-line"></div>
            <div className="skills-separator-circle">
              <div className="skills-separator-inner-circle"></div>
            </div>
          </div>
          <div className="skills-items-container">
            <div className="skills-item">
              <span className="skills-item-text">Python</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Java</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">C/C++</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Javascript</span>
            </div>
          </div>
        </div>

        <div className="skills-sets-container">
          <div className="skills-label-container">
            <span className="skills-label">Platforms(OS)</span>
          </div>
          <div className="skills-separator-container">
            <div className="skills-separator-line"></div>
            <div className="skills-separator-circle">
              <div className="skills-separator-inner-circle"></div>
            </div>
          </div>
          <div className="skills-items-container">
            <div className="skills-item">
              <span className="skills-item-text">Android</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Linux</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Windows</span>
            </div>
          </div>
        </div>

        <div className="skills-sets-container">
          <div className="skills-label-container">
            <span className="skills-label">Libraries</span>
          </div>
          <div className="skills-separator-container">
            <div className="skills-separator-line"></div>
            <div className="skills-separator-circle">
              <div className="skills-separator-inner-circle"></div>
            </div>
          </div>
          <div className="skills-items-container">
            <div className="skills-item">
              <span className="skills-item-text">OpenCV</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Scikit-Learn</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Pygame</span>
            </div>
          </div>
        </div>

        <div className="skills-sets-container">
          <div className="skills-label-container">
            <span className="skills-label">Databases</span>
          </div>
          <div className="skills-separator-container">
            <div className="skills-separator-line"></div>
            <div className="skills-separator-circle">
              <div className="skills-separator-inner-circle"></div>
            </div>
          </div>
          <div className="skills-items-container">
            <div className="skills-item">
              <span className="skills-item-text">MySQL</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="skills-sets-container">
          <div className="skills-label-container">
            <span className="skills-label">Web Technologies</span>
          </div>
          <div className="skills-separator-container">
            <div className="skills-separator-line"></div>
            <div className="skills-separator-circle">
              <div className="skills-separator-inner-circle"></div>
            </div>
          </div>
          <div className="skills-items-container">
            <div className="skills-item">
              <span className="skills-item-text">HTML</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">CSS</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">JQuery</span>
            </div>

            <div className="skills-item">
              <span className="skills-item-text">Express</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">React</span>
            </div>
            <div className="skills-item">
              <span className="skills-item-text">Node</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
