import React from "react";
import "./style.css";

const Work = () => {
  return (
    <>
      <div className="work-sec" id="work">
        <div className="container">
          <h2 className="h2-style text-center">My Work</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="box2">
                <div className="custom-scroll">
                  <img src="/images/project1.png" alt="project-1" />
                </div>
                <h4 className="text-center">It Services</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box2">
                <div className=" custom-scroll">
                  <img src="/images/project2.png" alt="project-1" />
                </div>
                <h4 className="text-center">Portfolio layout</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box2">
                <div className=" custom-scroll">
                  <img src="/images/project3.png" alt="project-1" />
                </div>
                <h4 className="text-center">Estore</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="box2">
                <div className=" custom-scroll ">
                  <img src="/images/project4.png" alt="project-1" />
                </div>
                <h4 className="text-center">About AI</h4>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box2">
                <div className=" custom-scroll">
                  <img src="/images/project5.png" alt="project-1" />
                </div>
                <h4 className="text-center">Taxi Services</h4>
              </div>
            </div>
        

          <div className="col-sm-4">
              <div className="box2">
                <div className=" custom-scroll">
                  <img src="/images/project6.png" alt="project-1" />
                </div>
                <h4 className="text-center">Navkar Proteins</h4>
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  );
};

export default Work;
