import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Optional if you want to style separately

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        <div className="hero-image-container">
            <img src="/gifLaks.gif" alt="Moses Lakei Lenana" className="hero-image" />
        </div>
      <h1 className="hero-stitle">Clever • Creative Thinker • Motivationer</h1>
    </motion.div>
  );
};

export default Hero;
