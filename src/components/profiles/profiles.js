import React from "react";
import codechef from "../images/codechef.png";
import leetcode from "../images/leet.png";
import hackerrank from "../images/hack.png";
import interviewbit from "../images/inter1.png";

function Profiles() {
  return (
    <section id="profiles" className="section5">
      <div className="container">
        <div className="head-wrapper">
          <div className="heading">
            Profiles
            <div className="underline"></div>
          </div>

          <div className="backhead2">Coding</div>
        </div>

        <div className="row">
          <div className="column">
            <a href="https://www.codechef.com/users/arjunmnn7">
              <img src={codechef} alt="Snow" style={{ width: "100%" }}></img>
            </a>
          </div>
          <div className="column">
            <a href="https://leetcode.com/arjunmnn/">
              <img src={leetcode} alt="Snow" style={{ width: "100%" }}></img>
            </a>
          </div>
          <div className="column">
            <a href="https://www.hackerrank.com/arjunmnn7">
              <img src={hackerrank} alt="Snow" style={{ width: "100%" }}></img>
            </a>
          </div>
          <div className="column">
            <a href="https://www.interviewbit.com/profile/arjunmnn7">
              <img
                src={interviewbit}
                alt="Snow"
                style={{ width: "100%" }}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profiles;
