import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <div className="about-sec" id="about">

      
        <div className="container">
          <h2 className="h2-style text-center">
            About Me.
          </h2>
          <div className="content">
            <p>
              Hello! I'm Sunaina, a frontend developer with a love for clean
              design and interactive web experiences. I work with technologies
              like HTML, CSS, JavaScript, React, and Next.js. After completing a
              4-month course, I built projects like a weather app and a news
              site using APIs. I also enjoy working with WordPress and Photoshop
              to bring ideas to life visually. Right now, I’m focused on
              sharpening my skills and building a portfolio that reflects my
              creativity and growth as a developer. Let's build something
              beautiful together!
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="skills">
                <h2>Skills</h2>
                <p>
                  <strong>Frontend Technologies:</strong> Html, Css, JavaScript
                  and Bootstrap
                </p>
                <p>
                  <strong>Framework & Libraries:</strong> React.js & Next.js
                </p>
                <p>
                  <strong>CMS:</strong>Wordpress
                </p>
                <p>
                  <strong>Design Tools</strong>Basics of photoshop
                </p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="skills">
                <h2>Education</h2>
                <p>
                  <strong>Graduation (BCA):</strong> From PGGCG-42 Chandigarh,
                  Punjab University
                </p>
                <p>
                  <strong>Higher Secondary:</strong>From GMSSS-37D Chandigarh,
                  in Humanities
                </p>
                <p>
                  <strong>Secondary:</strong>From GMSSS-40B Chandigarh
                </p>
                <p>
                  <strong>Frontend Development & Designing</strong>RGstartup,
                  11-phase Mohali
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default About;
