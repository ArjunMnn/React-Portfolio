import profile from "../images/photo3.jpg";
import "../../App.css";
const Header = () => {
  return (
    <div className="sidebar">
      <div className="contents">
        <center>
          <img src={profile} alt="" id="profilepic" />
          <h3>
            Arjun <span>Menon</span>
          </h3>
        </center>
        <div className="headings">
          <Side title="Home" link="#home" />
          <Side title="About" link="#about" />
          <Side title="Skills" link="#skills" />
          <Side title="Projects" link="#projects" />
          <Side title="Profiles" link="#profiles" />
          <Side title="Contact" link="#contact" />
        </div>
      </div>
      <div className="contact-info">
        <a href="https://www.facebook.com/arjun.menon.1610">
          <i className="fab fa-facebook-f" id="facebook" aria-hidden="true"></i>
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
      </div>
    </div>
  );
};

const Side = (props) => {
  const { link, title } = props;
  return (
    <a href={link}>
      <span>{title}</span>
    </a>
  );
};

export default Header;
