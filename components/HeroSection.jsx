"use client";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import { DownloadOutlined, ArrowDownOutlined } from "@ant-design/icons";

const HeroSection = () => {
  return (
    <div className="hero-sec">
      <div className="container">
        <div className="row align">
          <div className="col-sm-5">
            <div className="main-box">
              <div className="img-box">
                <Image
                  src="/images/img1jpg.jpg"
                  alt="girl-img"
                  height={200}
                  width={400}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="content-box">
              <h2>
                I'm <span>Sunaina</span>
              </h2>
              <h1>Frontend Developer</h1>
              <p>
                I'm a frontend developer passionate about building responsive,
                user-friendly web applications using modern technologies like
                React, Next.js, HTML, and CSS. I'm constantly learning and
                working on projects to improve my skills
              </p>
            </div>
            <Link className="cv-btn" href="/Sunaina_CV.pdf">
              Download CV <DownloadOutlined />
            </Link>
            <Link href="#work" className="cv-btn">
              View Projects <ArrowDownOutlined />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
