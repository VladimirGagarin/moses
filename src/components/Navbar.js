import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhotoVideo, FaInfoCircle } from "react-icons/fa";
import '../App.css'

const Navbar = ({ exclude }) => {
    const paths = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "About", path: "/about", icon: <FaInfoCircle /> },
        { name: "Gallery", path: "/gallery", icon: <FaPhotoVideo /> },
    ];

    return (
        <div className="navbar">
            <ul className="navbar-list">
                {paths
                    .filter((p) => p.name !== exclude)
                    .map((item, index) => (
                        <li key={index} className="navbar-item">
                            <Link to={item.path} className="navbar-link">
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Navbar;
