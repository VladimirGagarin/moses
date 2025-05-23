import React, {useRef, useEffect, useState} from 'react';
import SocialIcon from './SocialIcon';
import '../App.css';
import anime from 'animejs'; // ✅ Correct way




const Gallery = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const [lang, setLanguage] = useState("english");
    
   const photos  = [
       {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.40 PM.jpeg',
            abouts: "A visionary in contour mastery, Moses redefines bone structure like a Renaissance sculptor — elegance in every blend.",
            abouts_it: "Visionario nel dominio del contouring, Moses ridefinisce la struttura ossea come uno scultore rinascimentale — eleganza in ogni sfumatura."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.42 PM.jpeg',
            abouts: "When Moses touches a brush, he doesn't paint — he unveils identity. The alchemy of beauty starts in his hands.",
            abouts_it: "Quando Moses tocca un pennello, non dipinge — svela l’identità. L'alchimia della bellezza inizia dalle sue mani."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.43 PM.jpeg',
            abouts: "With hands like whispered poetry, Moses sculpts strands into symphonies—where every lock speaks of elegance, and every finish is a sonnet of shine and soul.",
            abouts_it: "Con mani come poesie sussurrate, Moses scolpisce le ciocche in sinfonie—dove ogni capello racconta eleganza, e ogni finitura è un sonetto di luce e anima."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.44 PM.jpeg',
            abouts: "He doesn't follow trends — he curates timeless looks. Moses is the whisper behind every iconic transformation.",
            abouts_it: "Non segue le tendenze — cura look senza tempo. Moses è il sussurro dietro ogni trasformazione iconica."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.51 PM (1).jpeg',
            abouts: "With every lash lift and brow architecture, Moses frames faces like masterpieces — refined, fierce, unforgettable.",
            abouts_it: "Con ogni sollevamento ciglia e architettura delle sopracciglia, Moses incornicia i volti come capolavori — raffinati, audaci, indimenticabili."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.45 PM (2).jpeg',
            abouts: "Moses crafts with the vocabulary of velvet mattes, satin finishes, and editorial drama — where skincare meets storytelling.",
            abouts_it: "Moses crea con il vocabolario dei matt vellutati, finiture satinate e dramma editoriale — dove la skincare incontra il racconto."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM (1).jpeg',
            abouts: "From runway-ready glam to soft bridal radiance, Moses’ artistry is fluid, expressive, and spellbindingly intentional.",
            abouts_it: "Dal glam da passerella alla delicata radiosità da sposa, l’arte di Moses è fluida, espressiva e incantevolmente intenzionale."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM (2).jpeg',
            abouts: "His brushes speak fluent glow — each stroke engineered to empower, each hue chosen to honor beauty’s diversity.",
            abouts_it: "I suoi pennelli parlano fluentemente il linguaggio della luminosità — ogni pennellata progettata per valorizzare, ogni tonalità scelta per onorare la diversità della bellezza."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.46 PM.jpeg',
            abouts: "An artisan of the skin, Moses blends design with dermal detail — shaping not just cheekbones, but confidence itself. Every look he creates radiates grace, strength, and the elegance of inner power revealed.",
            abouts_it: "Un artigiano della pelle, Moses fonde design e dettaglio dermico — scolpendo non solo gli zigomi, ma anche la fiducia in sé stessi. Ogni look che crea irradia grazia, forza ed eleganza del potere interiore rivelato."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.47 PM (1).jpeg',
            abouts: "His work goes beyond glam. Moses channels emotion through texture, shadow, and illumination. Every face he touches becomes a living canvas — a celebration of the unique, the fierce, the profoundly human.",
            abouts_it: "Il suo lavoro va oltre il glamour. Moses canalizza l’emozione attraverso texture, ombre e luci. Ogni volto che tocca diventa una tela vivente — una celebrazione dell’unicità, della forza e dell’umanità profonda."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.47 PM.jpeg',
            abouts: "Soft glam? Editorial edge? Moses is a shapeshifter of style — blending boldness and authenticity into every look. With him, every face is a fashion statement, every client a muse.",
            abouts_it: "Soft glam? Editoriale audace? Moses è un mutaforma dello stile — fonde audacia e autenticità in ogni look. Con lui, ogni volto è una dichiarazione di moda, ogni cliente una musa."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.45 PM.jpeg',
            abouts: "A curator of complexions, Moses sculpts with buttery foundations and airbrushed accents. His beauty philosophy is architectural — thoughtful, dimensional, and timeless in its elegance.",
            abouts_it: "Curatore di incarnati, Moses scolpisce con fondotinta cremosi e tocchi aerografati. La sua filosofia di bellezza è architettonica — riflessiva, tridimensionale ed eternamente elegante."
        },
        {
            imgSrc: '/images/whats.png',
            abouts: "Moses doesn’t just work in cosmetics — he works in confidence. With each palette, he reshapes narratives, empowering his clients to see themselves as they’ve never dared to before: radiant, worthy, unstoppable.",
            abouts_it: "Moses non lavora solo nei cosmetici — lavora nella fiducia. Con ogni palette, riscrive storie, dando ai suoi clienti il potere di vedersi come non hanno mai osato: radiosi, degni, inarrestabili."
        },
        {
            imgSrc: '/images/whats1.png',
            abouts: "Moses isn’t just a makeup artist — he’s a storyteller of identity. Every brushstroke is a sentence, every shade a chapter, revealing not just beauty, but power, presence, and the unspoken strength within. Through his art, people don’t just look different — they rediscover who they truly are.",
            abouts_it: "Moses non è solo un truccatore — è un narratore dell’identità. Ogni pennellata è una frase, ogni tonalità un capitolo che rivela non solo la bellezza, ma potenza, presenza e la forza interiore mai detta. Attraverso la sua arte, le persone non appaiono solo diverse — riscoprono chi sono davvero."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.52 PM (1).jpeg',
            abouts: "Every line, every glow, every shimmer Moses applies is a brushstroke in a masterpiece of expression. He choreographs beauty into movement — art you don’t just wear, but feel.",
            abouts_it: "Ogni linea, ogni luce, ogni bagliore che Moses applica è una pennellata in un capolavoro d'espressione. Coreografa la bellezza nel movimento — un’arte che non si indossa soltanto, ma si sente."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.52 PM.jpeg',
            abouts: "Behind every fierce look stands a gentle spirit. Moses blends charisma with chemistry, crafting faces that don’t just catch the eye — they hold it. His art is equal parts strength and poetry.",
            abouts_it: "Dietro ogni look audace c'è uno spirito gentile. Moses fonde carisma e alchimia, creando volti che non solo catturano lo sguardo — lo trattengono. La sua arte è forza e poesia in egual misura."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.53 PM (1).jpeg',
            abouts: "Moses doesn’t simply create looks — he casts spells. Each transformation feels like magic incarnate, hovering between elegance and enchantment, rooted in vision, powered by passion.",
            abouts_it: "Moses non crea semplicemente look — lancia incantesimi. Ogni trasformazione è magia incarnata, sospesa tra eleganza e incanto, radicata nella visione e alimentata dalla passione."
        },
        {
            imgSrc: '/images/WhatsApp Image 2025-05-10 at 8.30.53 PM.jpeg',
            abouts: "Skincare. Shade theory. Glamour. Moses fuses them into living art. His touch is unmistakable, his style legendary — a signature that turns fleeting beauty into eternal presence.",
            abouts_it: "Skincare. Teoria del colore. Glamour. Moses fonde tutto in arte vivente. Il suo tocco è inconfondibile, il suo stile leggendario — una firma che trasforma la bellezza effimera in presenza eterna."
        },
    ];



     const handleCardClick = (index) => {
        setFlippedCards((prev) => ({
        ...prev,
        [index]: !prev[index],
        }));

         anime({
                targets: flippedCards[index],
                opacity: [0, 1],
                translateZ: [-100, 0],
                rotateY: [-45, 0],
                duration: 1500,
                easing: 'easeOutExpo',
            });
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

                entry.target.scrollIntoView({block: "center", behavior:"smooth"})
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
            threshold: 0.4, // Adjust how much of the card needs to be visible
            root: null,
            
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
                        <img src={`.${photo.imgSrc}`} alt={`Photo_${index}`} />
                        <div className="social-overlay">
                            <SocialIcon />
                        </div>
                        </div>
                        <div className="card-back">
                            <div className="profile-back">
                                <div className="profile-logo">
                                <img src="./images/moses.png" alt="Profile" className="profile-image" />
                                </div>
                                <div className="profile-content">
                                <h3 className="profile-name"><strong>Moses Lakei Lenana</strong></h3>
                                <p className="profile-text">{lang === "english" ? photo.abouts : photo.abouts_it}</p>
                               <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLanguage(lang === "english" ? "italian" : "english");
                                    }}
                                    className="lang-btn"
                                    >
                                    {lang === "english" ? "Italiano" : "English"}
                                </button>


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