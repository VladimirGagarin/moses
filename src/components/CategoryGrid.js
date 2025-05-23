import React from "react";
import "../App.css";

const CategoryGrid = ({ categories, onSelect }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div
          key={category}
          className="category-card"
          onClick={() => onSelect(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
