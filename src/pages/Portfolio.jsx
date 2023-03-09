import React from "react";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    <>
      <h2 className="logo">HGW</h2>
      <Navbar />
      <div className="portfolio">
        <h1>RECENT WORKS</h1>
        <div className="p-images">
          <div className="img1">Web Designing</div>
          <div className="img2">Portfolio</div>
          <div className="img3">Full Stack Engineer</div>
        </div>
      </div>
      <h4 className="p-h4">&copy; 2023 By Hitesh</h4>
    </>
  );
};

export default Portfolio;
