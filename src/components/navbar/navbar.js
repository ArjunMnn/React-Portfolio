import React, { useState } from "react";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  return (
    <nav>
      <div className="upper-nav">
        <div className="nav-left-area">
          ARJUN <span>MENON</span>
        </div>
        <div className="nav-right-area">
          <div className="contact-info">
            <a href="https://www.facebook.com/arjun.menon.1610">
              <i
                className="fab fa-facebook-f"
                id="facebook"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://github.com/ArjunMnn">
              <i className="fab fa-github" id="github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/arjun-menon-0b4578192/">
              <i
                className="fab fa-linkedin-in"
                id="linkedin"
                aria-hidden="true"
              ></i>
            </a>
            <FontAwesomeIcon
              icon={showLink ? faTimesCircle : faBars}
              style={{ color: "white", transition: "all .5s" }}
              size="lg"
              onClick={() => setShowLink(!showLink)}
              id="ham"
            />
          </div>
        </div>
      </div>
      <div className={showLink ? "nav-links" : "nav-links-hide"}>
        <div className="nav-link-inner" onClick={() => setShowLink(!showLink)}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#profiles">Profiles</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
