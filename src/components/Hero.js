import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import {UseInView} from './ImageSlider'

const heroLines = [
  {
    letter: 'M',
    text: 'Master of Light and Line',
    image: '/images/m.png',
  },
  {
    letter: 'O',
    text: 'Oracle of Beauty’s Whisper',
    image: '/images/o.jpg',
  },
  {
    letter: 'S',
    text: 'Sculptor of Radiance and Soul',
    image: '/images/s.jpg',
  },
  {
    letter: 'E',
    text: 'Elegance Embodied in Every Touch',
    image: '/images/e.jpg',
  },
  {
    letter: 'S',
    text: 'Storyteller of Style and Spirit',
    image: '/images/s1.jpg',
  },
];

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-image-container">
        <img src="./gifLaks.gif" alt="Moses Lakei Lenana" className="hero-image" />
      </div>

      <div className="hero-stitle-grid">
        {heroLines.map((line, index) => {
          const [ref, isInView] = UseInView({ threshold: 0.3 });

          return (
            <motion.div
              ref={ref}
              key={line.letter + index}
              className="hero-line"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={`.${line.image}`} alt={line.text} className="hero-line-img" />
              <span>
              {line.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Hero;
