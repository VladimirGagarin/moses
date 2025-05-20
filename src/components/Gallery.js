import React, {useRef, useEffect, useState} from 'react';
import SocialIcon from './SocialIcon';
import '../App.css';
import anime from 'animejs'; // ✅ Correct way




const Gallery = () => {
    const [flippedCards, setFlippedCards] = useState({});
    
    const photos  = [
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.40 PM.jpeg',
            abouts: "A visionary in contour mastery, Moses redefines bone structure like a Renaissance sculptor — elegance in every blend."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.42 PM.jpeg',
            abouts: "When Moses touches a brush, he doesn't paint — he unveils identity. The alchemy of beauty starts in his hands."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.43 PM.jpeg',
            abouts: "From matte magic to glass-skin glow, Moses balances radiance and realism with couture-level precision."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.44 PM.jpeg',
            abouts: "He doesn't follow trends — he curates timeless looks. Moses is the whisper behind every iconic transformation."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.45 PM.jpeg',
            abouts: "With every lash lift and brow architecture, Moses frames faces like masterpieces — refined, fierce, unforgettable."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.45 PM (2).jpeg',
            abouts: "Moses crafts with the vocabulary of velvet mattes, satin finishes, and editorial drama — where skincare meets storytelling."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM (1).jpeg',
            abouts: "From runway-ready glam to soft bridal radiance, Moses’ artistry is fluid, expressive, and spellbindingly intentional."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM (2).jpeg',
            abouts: "His brushes speak fluent glow — each stroke engineered to empower, each hue chosen to honor beauty’s diversity."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM.jpeg',
            abouts: "Moses fuses design and dermal detail — a true artisan of elegance, shaping beauty from cheekbones to confidence."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.47 PM (1).jpeg',
            abouts: "Beyond glam — Moses channels emotion into texture, shadow, and light. Every client is his canvas of celebration."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.47 PM.jpeg',
            abouts: "Soft glam? Bold editorial? Moses adapts like a style shapeshifter — always flawless, always fiercely authentic."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.51 PM (1).jpeg',
            abouts: "A curator of complexions, Moses sculpts features with buttery foundations and editorial elegance. A true beauty architect."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.51 PM.jpeg',
            abouts: "He’s not just in cosmetics — he’s in confidence. Moses empowers with pigment, reshaping narratives one palette at a time."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.52 PM (1).jpeg',
            abouts: "Line, shade, glow — Moses choreographs them into symphonies of self-expression. Beauty, made tangible."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.52 PM.jpeg',
            abouts: "Behind every fierce look is a gentle artist — Moses blends charisma with chemistry and pure cosmetic poetry."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.53 PM (1).jpeg',
            abouts: "Moses isn’t just creating looks — he’s casting spells. His work lives between elegance and enchantment."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.53 PM.jpeg',
            abouts: "Skincare, shade theory, glamor — Moses weaves it all into living art. His craft? Undeniable. His style? Legendary."
        },
    ];


     const handleCardClick = (index) => {
        setFlippedCards((prev) => ({
        ...prev,
        [index]: !prev[index],
        }));
    };


    const galleryRef = useRef(null);


    useEffect(() => {
        const cards = galleryRef.current.querySelectorAll('.photo-card');

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateZ: [-100, 0],
                    rotateY: [-45, 0],
                    duration: 1500,
                    easing: 'easeOutExpo',
                });
                } else {
                // Optional: reset the card if it leaves the viewport
                anime.set(entry.target, {
                    opacity: 0,
                    translateZ: -100,
                    rotateY: -45,
                });
                }
            });
            },
            {
            threshold: 0.3, // Adjust how much of the card needs to be visible
            }
        );

        cards.forEach((card) => {
            anime.set(card, { opacity: 0 }); // Make sure it's hidden initially
            observer.observe(card);
        });

        return () => observer.disconnect(); // Clean up on unmount
    }, []);

         return (
            <div className="gallery-container" ref={galleryRef}>
            {photos.map((photo, index) => (
                <div
                key={index}
                className="photo-card"
                onClick={() => handleCardClick(index)}
                >
                    <div className={`card-inner ${flippedCards[index] ? 'flipped' : ''}`}>
                        <div className="card-front">
                        <img src={photo.imgSrc} alt={`Photo_${index}`} />
                        <div className="social-overlay">
                            <SocialIcon />
                        </div>
                        </div>
                        <div className="card-back">
                            <div className="profile-back">
                                <div className="profile-logo">
                                <img src="/images/lakei.png" alt="Profile" className="profile-image" />
                                </div>
                                <div className="profile-content">
                                <h3 className="profile-name">Moses Lenana</h3>
                                <p className="profile-text">{photo.abouts}</p>
                                </div>
                            </div>
                            </div>


                    </div>
                </div>
            ))}
            </div>
        );
}

export default Gallery;