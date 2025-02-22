import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css"; // Stili

const images = [
    "https://i.postimg.cc/525h5mKV/prezentare1.jpg", // Sostituisci con l'URL desiderato
    "https://i.postimg.cc/fbB1pRhq/prezentare2.jpg", // Sostituisci con l'URL desiderato
    'https://i.postimg.cc/W42Q5JxJ/prezentare3.jpg',
    'https://i.postimg.cc/MTHgSJ66/prezentare4.jpg',
    'https://i.postimg.cc/FR68FCzj/prezentare5.jpg',
];

const Home = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // CAMBIO IMMAGINE OGNI 5 SECONDI
      return () => clearInterval(interval);
    }, []);
  
    return (

      <>
      
     
      <div className="slider-container">
        <motion.div 
          className="carousel"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 15, ease: "easeInOut" }} // TRANSIZIONE PIÙ LENTA
          style={{ display: "flex", width: `${images.length * 100}%` }}
        >
          {images.map((src, i) => (
            <div key={i} className="item">
              <img src={src} alt={`Home ${i + 1}`} />
            </div>
          ))}
        </motion.div>
      </div>

      </>
    );
  };
  
  export default Home;

// const images = [
//     "https://i.postimg.cc/525h5mKV/prezentare1.jpg", // Sostituisci con l'URL desiderato
//     "https://i.postimg.cc/fbB1pRhq/prezentare2.jpg", // Sostituisci con l'URL desiderato
//     'https://i.postimg.cc/W42Q5JxJ/prezentare3.jpg',
//     'https://i.postimg.cc/MTHgSJ66/prezentare4.jpg',
//     'https://i.postimg.cc/FR68FCzj/prezentare5.jpg',
// ];
