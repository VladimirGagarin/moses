import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../App.css';

const SocialIcon = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const navbarRef = useRef(null);

    // 👇 Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsNavbarVisible(false);
            }
        };

        if (isNavbarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavbarVisible]);

    return (
        <motion.div
            className="social-icon-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={(e) => e.stopPropagation()}
        >
            <Link to="https://www.facebook.com/profile.php?id=61550804163923" target="_blank" className="social-icon" style={{ background: 'linear-gradient(to right, #3b5998, #8b9dc3)', color: 'white' }}   onClick={(e) => e.stopPropagation()}>
                <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com/musa.lakei.lenana/" target="_blank" className="social-icon" style={{ background: 'linear-gradient(to right, #e1306c, #f5a623)', color: 'white' }}>
                <FaInstagram />
            </Link>
            <Link to="https://wa.me/254794949856?text=Hello%20Moses%20Lakei%2C%20I%20can't%20see%20your%20twitter%20and%20I%27d%20love%20to%20connect!" target="_blank" className="social-icon" style={{ background: 'linear-gradient(to right, #1DA1F2, #14171A)', color: 'white' }}   onClick={(e) => e.stopPropagation()}>
                <FaTwitter />
            </Link>
            <Link to="https://wa.me/254794949856?text=Hello%20Moses%20Lakei%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20love%20to%20connect!" target="_blank" className="social-icon" style={{ background: 'linear-gradient(to right, #25D366, #128C7E)', color: 'white' }}   onClick={(e) => e.stopPropagation()}>
                <FaWhatsapp />
            </Link>

            <Link to="/" className="social-icon" style={{ background: 'linear-gradient(135deg, #e5ebe0, #07eae3)', color: 'purple' }}>
                <FaHome />
            </Link>

        </motion.div>
    );
};

export default SocialIcon;
