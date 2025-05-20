import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "../App.css";

const About = () => {
  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-image-container">
          <img
            src="/images/lakei.png"
            alt="Moses Lakei Lenana"
            className="about-image"
          />
        </div>
        <h1 className="about-title">Moses Lakei Lenana</h1>
        <p className="about-subtitle">
          <strong>Moses Lakei Lenana</strong> is a clever and creative thinker
          with a passion for motivation. He is dedicated to inspiring others
          through his work and ideas.
        </p>
        <p className="about-subtitle">
          <strong>Moses</strong> is a firm believer in the power of creativity
          and innovation. His journey is one of growth, learning, and sharing
          knowledge with those around him.
        </p>
        <Navbar exclude={"About"} />
      </motion.div>
    </>
  );
};

export default About;
