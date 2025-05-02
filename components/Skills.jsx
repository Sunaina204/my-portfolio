"use client";
import "./style.css";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="skills-sec" id="skill">
        <div className="container">
          <h2 className="h2-style text-center">My Skills</h2>
          <div className="row">
            <div className="col-sm-3">
              <div className="skill-box">
                <Image
                  src="/images/html.png"
                  alt="html img"
                  height={200}
                  width={200}
                 className="skill-img"
                />

                <h5>HTML</h5>
                <div className="inner-div">
                  
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="skill-box">
                <Image
                  src="/images/css.png"
                  alt="html img"
                  height={200}
                  width={100}
                    className="skill-img"
                />

                <h5>CSS</h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="skill-box">
                <Image
                  src="/images/js.png"
                  alt="html img"
                  height={200}
                  width={200}
                  className="skill-img"
                />

                <h5>JAVASCRIPT</h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="skill-box">
                <Image
                  src="/images/bootstrap.png"
                  alt="html img"
                  height={200}
                  width={200}
                  className="skill-img"
                />

                <h5>BOOTSTRAP</h5>
              </div>
            </div>
            <div className="row itemss">
              <div className="col-sm-3">
                <div className="skill-box">
                  <Image
                    src="/images/react.png"
                    alt="html img"
                    height={200}
                    width={200}
                    className="skill-img"
                  />

                  <h5>REACT</h5>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="skill-box">
                  <Image
                    src="/images/Nextjs.png"
                    alt="html img"
                    height={200}
                    width={200}
                    className="skill-img"
                  />

                  <h5>NEXT.JS</h5>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="skill-box">
                  <Image
                    src="/images/wordpress.png"
                    alt="html img"
                    height={200}
                    width={200}
                      className="skill-img1"
                  />

                  <h5>WORDPRESS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
