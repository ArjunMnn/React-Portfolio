import React, { useState } from "react";
import park from "../images/park.png";
import commerce from "../images/commerce.png";
import mern from "../images/mern.png";
import blogaroo from "../images/blogaroo.png";

function Project() {
  return (
    <section id="projects" className="section4">
      <div className="head-wrapper">
        <div className="heading">
          My Work
          <div className="underline"></div>
        </div>

        <div className="backhead">PROJECTS</div>
      </div>

      <div className="project-cards">
        <div className="project-card bbox">
          <a href="https://github.com/ArjunMnn/AgroAnalytics">
            <div className="project-item">
              <div
                className="project-body"
                style={{
                  backgroundImage: `url(${commerce})`,
                }}
              >
                <div className="project-overlay-bg">
                  <span>
                    <center>Agroanalytics</center>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card bbox">
          <a href="https://github.com/ArjunMnn/HuffCrypt">
            <div className="project-item">
              <div
                className="project-body"
                style={{
                  backgroundImage: `url(${mern})`,
                }}
              >
                <div className="project-overlay-bg">
                  <span>
                    <center>HuffCrypt</center>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card bbox">
          <a href="https://github.com/ArjunMnn/Drowsiness-Alert-System">
            <div className="project-item">
              <div
                className="project-body"
                style={{
                  backgroundImage: `url(${park})`,
                }}
              >
                <div className="project-overlay-bg">
                  <span>
                    <center>Drowsiness Alert System</center>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card bbox">
          <a href="https://github.com/ArjunMnn/Cloud-Based-Blood-Bank-System">
            <div className="project-item">
              <div
                className="project-body"
                style={{
                  backgroundImage: `url(${blogaroo})`,
                }}
              >
                <div className="project-overlay-bg">
                  <span>
                    <center>Cloud Based Blood Bank System</center>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
