import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import "../App.css";
import { Link } from "react-router-dom";



const  aboutPhoto = [ "/images/pencil2.png", 
 {imgUrl: "/images/slide.png", labels: "perfume"},
  {imgUrl: "/images/slide1.png", labels: "perfume"} ,
  {imgUrl: "/images/slide2.png", labels: "perfume"}, 
  {imgUrl: "/images/slide3.png", labels: "perfume"}, 
  {imgUrl: "/images/slide4.png", labels: "perfume"}, 
  {imgUrl: "/images/slide5.png", labels: "perfume"},
  {imgUrl: "/images/cbrush1.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush2.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush3.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush4.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush5.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush6.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush7.png", labels: "Concealer brushes"},
  {imgUrl: "/images/cbrush8.png", labels: "Concealer brushes"},
  {imgUrl: "/images/liners.png", labels: "Eye liners"},
  {imgUrl: "/images/liners1.png", labels: "Eye liners"},
  {imgUrl: "/images/liners2.png", labels: "Eye liners"},
  {imgUrl: "/images/liner3.png", labels: "Eye liners"},
  {imgUrl: "/images/liners4.png", labels: "Eye liners"},
  {imgUrl: "/images/palet.png", labels: "Makeup palettes"},
  {imgUrl: "/images/palet2.png", labels: "Makeup palettes"},
  {imgUrl: "/images/palet3.png", labels: "Makeup palettes"},
  {imgUrl: "/images/palet4.png", labels: "Makeup palettes"},
  {imgUrl: "/images/palet5.png", labels: "Makeup palettes"}, 
  {imgUrl: "/images/pencil.png", labels: "Makeup pencil"},
  {imgUrl: "/images/pencil1.png", labels: "Makeup pencil"},
  {imgUrl: "/images/pencil2.png", labels: "Makeup pencil"},
  {imgUrl: "/images/pencil3.png", labels: "Makeup pencil"},
  {imgUrl: "/images/pencil4.png", labels: "Makeup pencil"},
  
]
const labelsCategories = [
  "Concealer brushes",
  "perfume",
  "Eye liners",
  "Makeup palettes",
  "Makeup pencil"
];


const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("perfume");
  const [activeImage, setActiveImage] = useState(null); // For overlay

  const filteredPhotos = aboutPhoto.filter(
    (item) => item.labels === selectedCategory
  );

  return (
    <div className="about-container">
      <h1>Moses Lakei Lenana is...</h1>
       <Link to='https://vladimirgagarin.github.io/Lakei/#/pages/About'>
        <button className="Button">Be Curious</button>
      </Link>
      <br></br>
      <h2 className="category-title">Browse by Category</h2>
      <div className="category-tabs">
        {labelsCategories.map((label) => (
          <button
            key={label}
            className={`category-button ${
              selectedCategory === label ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid-container">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={index}
            className="grid-item"
            initial={{ opacity: 0, rotateY: 90, translateZ: -50 }}
            animate={{ opacity: 1, rotateY: 0, translateZ: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setActiveImage(`.${photo.imgUrl}`)}
          >
            <img src={`.${photo.imgUrl}`} alt={photo.labels} />
          </motion.div>
        ))}
      </div>

      {/* Overlay for clicked image */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Full View"
              className="overlay-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button className="close-btn" onClick={() => setActiveImage(null)}>
              ✖
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <br/>
      <Navbar exclude="About" />
    </div>
  );
};

export default About;

