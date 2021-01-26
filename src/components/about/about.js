import React from "react";

function About() {
  return (
    <section id="about" className="section2">
      <div className="head-wrapper">
        <div className="backhead">ABOUT ME</div>
        <div className="heading">
          My Story
          <div className="underline"></div>
        </div>
      </div>
      <div className="about-subhead-wrapper">
        <div className="about-subhead-left">
          <h2>
            I'm <span>Arjun Menon,</span> A Web Developer
          </h2>
          <p>
            I am an aspiring Full-stack Developer, looking to acquire
            professional skills and being upto-date with the futuristic
            technologies.
            <br />
            <br />I started off by learning Data Structures and Algorithms using
            Python. To Test my skills, I practiced Competitive Coding on{" "}
            <a
              href="https://www.hackerrank.com/arjunmnn7?hr_r=1"
              target="_blank"
              rel="noreferrer"
            >
              HackerRank
            </a>
            , where I earned Gold ⭐ Badges in Python and Problem Solving, and
            on{" "}
            <a
              href="https://leetcode.com/arjunmnn/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            . Then I started Competitive Programming on{" "}
            <a
              href="https://www.codechef.com/users/arjunmnn7"
              target="_blank"
              rel="noreferrer"
            >
              CodeChef
            </a>
            , where I achieved 4⭐ rating.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
