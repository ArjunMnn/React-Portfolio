import logo from "./logo.svg";

import Header from "./components/sidebar/header";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Profiles from "./components/profiles/profiles";

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Profiles />
        <Contact />
      </main>
    </div>
  );
}

export default App;
